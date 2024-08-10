import { Component, computed, inject, Input, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ProductAvailabilityService } from './product-availability.service';
import { getDate } from '../../utils';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { PRODUCTS_ROUTE } from '../../app/app.routes';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { ProductTypeMappings } from './product-availability.constants';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

@Component({
  selector: 'product-availability-page',
  templateUrl: './product-availability.page.html',
  styleUrl: './product-availability.page.less',
  imports: [NzIconModule, NzSpinComponent, NzFlexModule, NzPageHeaderModule, NzLayoutModule, NzDescriptionsModule, NzTagModule, DatePickerComponent],
  providers: [ProductAvailabilityService],
  standalone: true
})
export class ProductAvailabilityPage {
  productAvailabilityService = inject(ProductAvailabilityService);
  product = computed(() => this.productAvailabilityService.productAvailability());
  productType = computed(() => this.product()?.type ? ProductTypeMappings[this.product()?.type!] : '');

  selectedDate: WritableSignal<Date> = signal(new Date());

  constructor(private _router: Router) { }

  @Input()
  set id(productId: string) {
    this.productAvailabilityService.loadProductAvailability(getDate(this.selectedDate()), productId);
  }

  onBack() {
    this._router.navigate([PRODUCTS_ROUTE]);
  }
}
