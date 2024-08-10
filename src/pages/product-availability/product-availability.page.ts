import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ProductAvailabilityService } from './product-availability.service';
import { getDate } from '../../utils';

@Component({
  selector: 'product-availability-page',
  templateUrl: './product-availability.page.html',
  styleUrl: './product-availability.page.less',
  imports: [NzLayoutModule, NzTabsModule, NzIconModule, RouterLink],
  providers: [ProductAvailabilityService],
  standalone: true
})
export class ProductAvailabilityPage {
  productAvailabilityService = inject(ProductAvailabilityService);

  date: WritableSignal<Date> = signal(new Date());

  @Input()
  set id(productId: string) {
    this.productAvailabilityService.loadProductAvailability(getDate(this.date()), productId);
  }
}
