import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing';
import { NgModule } from '@angular/core';
import { OrdersComponent } from './components/orders/orders';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'orders', component: OrdersComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }