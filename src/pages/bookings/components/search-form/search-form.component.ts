import { Component, EventEmitter, inject, Output } from '@angular/core';
import { BookingsService } from '../../bookings.service';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
    selector: 'search-form-component',
    templateUrl: './search-form.component.html',
    styleUrl: './search-form.component.less',
    imports: [ReactiveFormsModule, NzFormModule, NzInputModule, NzFlexModule, NzButtonModule],
    standalone: true
})
export class SearchFormComponent {
    bookingsService = inject(BookingsService);
    @Output() toggleSearchForm = new EventEmitter<void>();

    form: FormGroup<{
        bookingReference: FormControl<string>;
        nameOrEmail: FormControl<string>;
    }>;

    constructor(private fb: NonNullableFormBuilder) {
        this.form = this.fb.group({
            bookingReference: ['', [Validators.required]],
            nameOrEmail: ['', [Validators.required]]
        });
    }

    async onSearch() {
        if (this.form.valid) {
            await this.bookingsService.loadBookings(this.form.value.bookingReference!);
            this.toggleSearchForm.emit();
        } else {
            //Todo: get validation working
            this.form.markAllAsTouched();
        }
    }
}