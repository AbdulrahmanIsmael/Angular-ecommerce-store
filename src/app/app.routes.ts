import { Routes } from '@angular/router';

// TODO: Add route guards for authentication and authorization
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./features/home/pages/home.routes').then((m) => m.homeRoutes),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/pages/products.routes').then((m) => m.productsRoutes),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./features/checkout/pages/checkout.routes').then((m) => m.checkoutRoutes),
  },
  {
    path: '**',
    redirectTo: 'products', // fallback route
  },
];
