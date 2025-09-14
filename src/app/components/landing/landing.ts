import { Component } from '@angular/core';
import { OrdersComponent } from "../orders/orders";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss'],
  imports: [OrdersComponent]
})
export class LandingComponent {
  featuredProducts = [
    {
      name: 'Chocolate Croissant',
      description: 'Flaky, buttery pastry filled with rich chocolate.',
      price: 3.99,
      image: 'assets/pie.jpeg'
    },
    {
      name: 'Sourdough Bread',
      description: 'Crispy crust with a tangy, chewy center.',
      price: 5.49,
      image: 'assets/cookies.jpeg'
    },
    {
      name: 'Cinnamon Roll',
      description: 'Soft roll swirled with cinnamon and sugar.',
      price: 4.25,
      image: 'assets/pie.jpeg'
    }
  ];
}
