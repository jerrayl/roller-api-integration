import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { compareDateComponent, range } from '../../../../utils';
import { DateComponent } from './date.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@Component({
    selector: 'date-picker-component',
    templateUrl: './date-picker.component.html',
    styleUrl: './date-picker.component.less',
    imports: [NzFlexModule, NzIconModule, NzButtonModule, DateComponent, NzDatePickerModule, FormsModule, NzPopoverModule],
    standalone: true
})
export class DatePickerComponent {
    selectedDate = input.required<Date>();
    @Output() selectDate = new EventEmitter<Date>();
    today = new Date();
    datePickerOpen: boolean = false;

    constructor() {
        this.disabledDate = this.disabledDate.bind(this);
    }

    compareDateComponent = compareDateComponent;

    dateOptions = computed(() => {
        let options: Date[] = [];
        for (const days of range(-1, 4)) {
            const date = new Date(this.selectedDate());
            date.setDate(date.getDate() + days);
            if (compareDateComponent(this.today, date) <= 0) {
                options.push(date);
            }
            if (options.length === 3) {
                break;
            }
        }
        return options;
    });

    disabledDate(date: Date) {
        return compareDateComponent(date, this.today) < 0;
    }

    pickDate(date: Date){
        this.datePickerOpen = false;
        this.selectDate.emit(date);
    }
}
