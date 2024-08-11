import { Component, inject } from '@angular/core';
import { NzEmptyComponent } from 'ng-zorro-antd/empty';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { CardComponent } from './card.component';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NgFor } from '@angular/common';
import { BookingsService } from '../../bookings.service';

@Component({
  selector: 'card-container-component',
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.less',
  imports: [NzEmptyComponent, NzFlexModule, NzCardComponent, CardComponent, NgFor],
  standalone: true
})
export class CardContainerComponent {
  bookingsService = inject(BookingsService);
}