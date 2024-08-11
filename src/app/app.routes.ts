import { Routes } from '@angular/router';
import { ProductsPage } from '../pages/products/products.page';
import { ProductAvailabilityPage } from '../pages/product-availability/product-availability.page';
import { BookingsPage } from '../pages/bookings/bookings.page';
import { BookingDetailsPage } from '../pages/booking-details/booking-details.page';

export const PRODUCTS_ROUTE = '';
export const AVAILABILITY_ROUTE = 'availability';
export const BOOKINGS_ROUTE = 'bookings';
export const BOOKING_DETAILS_ROUTE = 'booking-details';


export const routes: Routes = [
    { path: '', component: ProductsPage },
    { path: `${AVAILABILITY_ROUTE}/:id`, component: ProductAvailabilityPage },
    { path: BOOKINGS_ROUTE, component: BookingsPage },
    { path: BOOKING_DETAILS_ROUTE, component: BookingDetailsPage }
];
