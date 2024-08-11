import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { Session } from '../../../../models/models';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { getISODate } from '../../../../utils';

@Component({
    selector: 'time-picker-component',
    templateUrl: './time-picker.component.html',
    styleUrl: './time-picker.component.less',
    imports: [NzFlexModule, NzButtonModule, NzEmptyModule],
    standalone: true
})
export class TimePickerComponent {
    selectedStartTime = input.required<string>();
    sessions = input.required<Session[]>();
    @Output() selectStartTime = new EventEmitter<string>();
    today = getISODate(new Date());
    now = `${new Date().getHours()}${new Date().getMinutes()}`;

    validSessions = computed(() => this.sessions().filter(x => this.today !== x.date || x.startTime > this.now));
}
