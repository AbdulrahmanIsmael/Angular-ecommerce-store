import { ProductDetails } from './product-details/product-details';
import { Products } from './products/products';
import { Routes } from '@angular/router';

export const productsRoutes: Routes = [
  {
    path: '',
    component: Products,
    children: [
      {
        path: ':productId',
        component: ProductDetails,
      },
    ],
  },
];
