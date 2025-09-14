import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-orders',
  template: `
    <button (click)="checkout()">Pay Now</button>
  `
})
export class OrdersComponent {
  async checkout() {
    const stripe = await loadStripe('pk_test_51S764K1moLgwrgelvpDcfHFvv1BGCGuYbl9aqiEXRHQgfYgl4HVPZOPatKwzLko9KYIL7EzfId69mXN8sGCiogOB00BXGHotBz'); // your public key

    // Redirect directly to Checkout with pre-configured prices
    stripe?.redirectToCheckout({
      lineItems: [
        { price: 'price_1S769P1moLgwrgelYK0CtqNT', quantity: 1 }, // <-- Price IDs from Stripe Dashboard
        // { price: 'price_67890', quantity: 2 }
      ],
      mode: 'payment',
      successUrl: 'http://localhost:4200/success',
      cancelUrl: 'http://localhost:4200/cancel'
    });
  }
}
