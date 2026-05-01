import { Checkout } from './checkout/checkout';
import { Routes } from '@angular/router';

export const checkoutRoutes: Routes = [
  {
    path: ':checkoutId',
    component: Checkout,
  },
];
