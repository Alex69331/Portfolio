import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DessertsComponent } from '../desserts.component';
import { Item } from '../desserts.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CartComponent, CommonModule, DessertsComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {
  @Input() items: Item[] = [];
  @Output() addToCart = new EventEmitter<Item>();
  @Output() updateCart = new EventEmitter<Item>();

  selectedItem: Item | null = null;

  private saveTimeouts: { [key: string]: any } = {};
  private resetTimeouts: { [key: string]: any } = {};

  onAddToCart(item: Item) {
    if (!this.isSelected(item)) {
      this.addToCart.emit(item);
      item.quantity = 1;
      item.selected = true;
      this.selectedItem = item;
      this.scheduleReset(item);
    } else {
      item.selected = !item.selected;
    }
    this.scheduleReset(item);
  }

  isSelected(item: Item): boolean {
    return item.selected;
  }

  increaseQuantity(item: Item, event: Event) {
    event.stopPropagation();
    item.quantity++;
    this.scheduleReset(item);
  }
  decreaseQuantity(item: Item, event: Event) {
    event.stopPropagation();
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      item.quantity = 0;
      this.selectedItem = null;
      item.selected = false;
    }
    this.scheduleReset(item);
  }

  scheduleReset(item: Item) {
    clearTimeout(this.resetTimeouts[item.id]);
    this.resetTimeouts[item.id] = setTimeout(() => {
      this.resetSelection(item);
    }, 2000);
  }
  resetSelection(item: Item) {
    if (item.quantity > 0) {
      this.updateCart.emit(item);
      item.quantity = 0;
    }
    item.selected = false;
    this.selectedItem = null;
  }
}
