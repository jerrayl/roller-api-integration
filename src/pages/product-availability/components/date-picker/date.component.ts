import { Component, Input } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { DayMappings, MonthMappings } from './date.constants';

@Component({
  selector: 'date-component',
  templateUrl: './date.component.html',
  imports: [NzFlexModule],
  standalone: true
})
export class DateComponent {
  @Input() date: Date = new Date();
  @Input() isToday: boolean = false;

  dayMappings = DayMappings;
  monthMappings = MonthMappings;
}
