import { Routes } from '@angular/router';
import { ProductsPage } from '../pages/products/products.page';
import { ProductAvailabilityPage } from '../pages/product-availability/product-availability.page';

export const routes: Routes = [
    { path: '', component: ProductsPage },
    { path: 'availability/:id', component: ProductAvailabilityPage },
];
