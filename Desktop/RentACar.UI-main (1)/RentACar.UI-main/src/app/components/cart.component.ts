import { Component } from "@angular/core"; 
import {CartService} from "../services/cart.service"

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
  })
export class CartComponent{
    items = this.cartService.getCartItems();

    constructor(
        private cartService : CartService, 
    ){};
    
        onSubmit() : void {
            this.cartService.addToCart({name:"sdf",price : 444});
            this.items = this.cartService.getCartItems();

        }
}