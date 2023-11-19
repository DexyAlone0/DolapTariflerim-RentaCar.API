import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private cartItems: { name: string, price: number }[] = [];
    constructor() {
        this.cartItems.push({ name: 'Audi', price: 1000 });
        this.cartItems.push({ name: 'Bmw', price: 3440 });
        this.cartItems.push({ name: 'Toyota', price: 5000 });
    }

    getCartItems(): {name : string, price: number}[]{
        return this.cartItems;
    }
    addToCart(item: {name: string, price: number}) : void{
        this.cartItems.push(item);
    }
    removeFromCart(index: number): void {
        if (index >= 0 &&  index < this.cartItems.length){
            this.cartItems.splice(index, 1);
        }
    }
}