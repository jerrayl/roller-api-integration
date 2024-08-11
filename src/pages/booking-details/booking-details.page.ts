import { Component, inject } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { map, takeWhile, timer } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'bookings-details-page',
  standalone: true,
  imports: [NzLayoutModule, NzIconModule, NzFlexModule, ReactiveFormsModule, NzInputModule, NzFormModule, NzButtonModule, NzCheckboxModule, NzAlertModule, DatePipe, AsyncPipe],
  templateUrl: './booking-details.page.html'
})
export class BookingDetailsPage {
  form: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
    acceptMarketing: FormControl<boolean>;
  }>;

  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      acceptMarketing: [false]
    });
  }

  timeRemaining$ = timer(0, 1000).pipe(
    map(n => (600 - n) * 1000),
    takeWhile(n => n >= 0)
  );

  cancelCapacityReservation(){
    console.log("cancel clicked");
  }
}
