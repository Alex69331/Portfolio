import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../desserts.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnChanges {
  @Input() cart: Item[] = [];
  @Output() cardChanged = new EventEmitter<Item[]>();
  @Output() openModal = new EventEmitter<void>();
  orderTotal: number = 0;
  totalQuantity: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cart']) {
      this.calculateTotal();
    }
  }

  calculateTotal() {
    console.log('Calculating total...');
    this.orderTotal = this.cart.reduce((total, item) => {
      return total + this.calculateItemTotal(item);
    }, 0);

    this.totalQuantity = this.cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    this.cdr.detectChanges();
  }

  calculateItemTotal(item: Item): number {
    const price = parseFloat(item.price.replace('$', ''));
    return price * item.quantity;
  }
  removeItem(item: Item) {
    this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
    this.calculateTotal();
    this.cardChanged.emit(this.cart);
  }

  confirmOrder() {
    this.openModal.emit();
  }
}
