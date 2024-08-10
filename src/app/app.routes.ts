import { Routes } from '@angular/router';
import { ProductsPage } from '../pages/products/products.page';
import { ProductAvailabilityPage } from '../pages/product-availability/product-availability.page';

export const PRODUCTS_ROUTE = '';
export const AVAILABILITY_ROUTE = 'availability'; 

export const routes: Routes = [
    { path: '', component: ProductsPage },
    { path: `${AVAILABILITY_ROUTE}/:id`, component: ProductAvailabilityPage },
];
