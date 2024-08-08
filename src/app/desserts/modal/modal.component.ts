import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../desserts.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() cart: Item[] = [];
  @Output() closeModal = new EventEmitter<void>();
  @Output() clearCart = new EventEmitter<void>();

  getTotal() {
    return this.cart.reduce(
      (total, item) =>
        total + item.quantity * parseFloat(item.price.replace('$', '')),
      0
    );
  }
  calculateItemTotal(item: Item): number {
    return item.quantity * parseFloat(item.price.replace('$', ''));
  }
  onClose() {
    this.closeModal.emit();
    this.clearCart.emit();
  }
}
