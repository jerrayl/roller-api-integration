import { Component, computed, inject, Input, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ProductAvailabilityService } from './product-availability.service';
import { compareDateComponent, getISODate } from '../../utils';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { BOOKING_DETAILS_ROUTE, PRODUCTS_ROUTE } from '../../app/app.routes';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { ProductTypeMappings } from './product-availability.constants';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TimePickerComponent } from "./components/time-picker/time-picker.component";
import { ProductPickerComponent } from './components/product-picker/product-picker.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
    selector: 'product-availability-page',
    templateUrl: './product-availability.page.html',
    styleUrl: './product-availability.page.less',
    imports: [NzIconModule, NzSpinComponent, NzFlexModule, NzPageHeaderModule, NzLayoutModule, NzDescriptionsModule, NzTagModule, DatePickerComponent, TimePickerComponent, ProductPickerComponent, NzButtonModule],
    providers: [ProductAvailabilityService],
    standalone: true
})
export class ProductAvailabilityPage {
    productAvailabilityService = inject(ProductAvailabilityService);
    product = computed(() => this.productAvailabilityService.productAvailability());
    productType = computed(() => this.product()?.type ? ProductTypeMappings[this.product()?.type!] : '');

    selectedDate: WritableSignal<Date> = signal(new Date());
    selectedStartTime: WritableSignal<string> = signal('');
    selectedProducts: WritableSignal<{[key: string]: number}> = signal({});

    constructor(private _router: Router) { }

    @Input()
    set id(productId: string) {
        this.productAvailabilityService.loadProductAvailability(getISODate(this.selectedDate()), productId);
    }

    onBack() {
        this._router.navigate([PRODUCTS_ROUTE]);
    }

    onMakeBooking() {
        this._router.navigate([BOOKING_DETAILS_ROUTE]);
    }

    dateSelected(date: Date) {
        this.selectedDate.set(date);
        this.selectedStartTime.set('');
        this.productAvailabilityService.loadProductTimes(getISODate(date));
    }

    updateSelectedProduct(productId: string, change: number){
        this.selectedProducts.update(selectedProducts => ({...selectedProducts, [productId]: Math.max((selectedProducts[productId] ?? 0) + change, 0)}))
    }
}
