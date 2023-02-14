import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  title = 'AngularComponent';
    
    constructor(public router: Router){}
    goToPayment() {
    this.router.navigate(['/payment'])

    }

}
