import { Component, inject, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { BookingItem, PaymentStatus } from '../../../../models/models';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { PaymentStatusColors, PaymentStatusMappings } from './card.constants';
import { ProductsService } from '../../../products/products.service';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  imports: [NzCardModule, NzFlexModule, NzIconModule, NzTagModule, NzDescriptionsModule, NzSkeletonModule],
  standalone: true
})
export class CardComponent {
  @Input() bookingReference: string = '';
  @Input() status: PaymentStatus = PaymentStatus.Cancelled;
  @Input() total: number = 0;
  @Input() name: string = '';
  @Input() items: BookingItem[] = [];

  paymentStatusMappings = PaymentStatusMappings;
  paymentStatusColors = PaymentStatusColors;

  productsService = inject(ProductsService);
}