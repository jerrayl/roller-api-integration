import { Component, EventEmitter, input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { Session } from '../../../../models/models';

@Component({
    selector: 'time-picker-component',
    templateUrl: './time-picker.component.html',
    styleUrl: './time-picker.component.less',
    imports: [NzFlexModule, NzButtonModule],
    standalone: true
})
export class TimePickerComponent {
    selectedStartTime = input.required<string>();
    sessions = input.required<Session[]>();
    @Output() selectStartTime = new EventEmitter<string>();
}
