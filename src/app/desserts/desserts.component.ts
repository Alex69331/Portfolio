import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { CartComponent } from './cart/cart.component';
import { ModalComponent } from './modal/modal.component';

export interface Item {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  quantity: number;
  selected: boolean;
}

@Component({
  selector: 'app-desserts',
  standalone: true,
  imports: [ModalComponent, CartComponent, ItemListComponent, CommonModule],
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css'],
})
export class DessertsComponent {
  items: Item[] = [
    {
      id: '1',
      image: '/assets/images/image-waffle-desktop.jpg',
      title: 'Waffle',
      subtitle: 'Waffle with Berries',
      price: '$6.50',
      quantity: 0,
      selected: false,
    },
    {
      id: '2',
      image: '/assets/images/image-creme-brulee-desktop.jpg',
      title: 'Creme Brulee',
      subtitle: 'Vanilla Bean Creme Brulee',
      price: '$7.00',
      quantity: 0,
      selected: false,
    },
    {
      id: '3',
      image: '/assets/images/image-macaron-desktop.jpg',
      title: 'Macaron',
      subtitle: 'Macaron Mix of Five',
      price: '$8.00',
      quantity: 0,
      selected: false,
    },
    {
      id: '4',
      image: '/assets/images/image-tiramisu-desktop.jpg',
      title: 'Tiramisu',
      subtitle: 'Classic Tiramisu',
      price: '$5.50',
      quantity: 0,
      selected: false,
    },
    {
      id: '5',
      image: '/assets/images/image-baklava-desktop.jpg',
      title: 'Baklava',
      subtitle: 'Pistachio Baklava',
      price: '$4.00',
      quantity: 0,
      selected: false,
    },
    {
      id: '6',
      image: '/assets/images/image-meringue-desktop.jpg',
      title: 'Pie',
      subtitle: 'Lemon Meringue Pie',
      price: '$5.00',
      quantity: 0,
      selected: false,
    },
    {
      id: '7',
      image: '/assets/images/image-cake-desktop.jpg',
      title: 'Cake',
      subtitle: 'Red Velvet Cake',
      price: '$4.50',
      quantity: 0,
      selected: false,
    },
    {
      id: '8',
      image: '/assets/images/image-brownie-desktop.jpg',
      title: 'Brownie',
      subtitle: 'Salted Caramel Brownie',
      price: '$5.50',
      quantity: 0,
      selected: false,
    },
    {
      id: '9',
      image: '/assets/images/image-panna-cotta-desktop.jpg',
      title: 'Panna Cotta',
      subtitle: 'Vanilla Panna Cotta',
      price: '$6.50',
      quantity: 0,
      selected: false,
    },
  ];
  cart: Item[] = [];
  isModalOpen = false;

  addToCart(item: Item) {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push({ ...item });
    }
    this.cart = [...this.cart];
    console.log('Item added to cart:', item);
    console.log('Current cart:', this.cart);
  }

  updateCart(item: Item) {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push({ ...item });
    }
    this.cart = [...this.cart];
  }
  handleCartChange(cart: Item[]) {
    this.cart = [...cart];
  }
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
  clearCart() {
    this.cart = [];
  }
}
