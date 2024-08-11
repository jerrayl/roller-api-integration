import { Injectable, signal, WritableSignal } from '@angular/core';
import { getBookings } from '../../api';
import { Booking, PaymentStatus } from '../../models/models';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  bookingReferences: WritableSignal<string[]> = signal([]);
  bookings: WritableSignal<Booking[] | null> = signal([]);

  loadBookings = async (bookingReference: string) => {
    this.bookings.set(null);
    const bookings = await getBookings(this.bookingReferences().concat(bookingReference).join(','));
    this.bookings.set(bookings.map(mapBooking));
    this.bookingReferences.set(bookings.map(x => x.bookingReference));
  }
}

export const mapBooking = (apiModel: any): Booking => {
  return {...apiModel, status: PaymentStatus[apiModel.status]}
}
