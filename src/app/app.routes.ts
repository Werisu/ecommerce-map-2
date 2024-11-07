import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@ecommerce-map-2/home').then((m) => m.homeRoutes),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('@ecommerce-map-2/product-detail').then(
        (m) => m.productDetailRoutes
      ),
  },
];
