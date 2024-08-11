import { Component, EventEmitter, input, Output } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { Product } from '../../../../models/models';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
    selector: 'product-picker-component',
    templateUrl: './product-picker.component.html',
    styleUrl: './product-picker.component.less',
    imports: [NzFlexModule, NzInputNumberModule, FormsModule, NzButtonModule, NzIconModule, NzToolTipModule],
    standalone: true,
})
export class ProductPickerComponent {
    selectedProducts = input.required<{[key: string]: number}>();
    products = input.required<Product[]>();
    @Output() incrementSelectedProduct = new EventEmitter<string>();
    @Output() decrementSelectedProduct = new EventEmitter<string>();
}
