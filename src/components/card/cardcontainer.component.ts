import { Component, inject } from '@angular/core';
import { NzEmptyComponent } from 'ng-zorro-antd/empty';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { CardComponent } from './card.component';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NgFor } from '@angular/common';
import { ProductsService } from '../../services/services.products';

@Component({
  selector: 'cardcontainer-component',
  templateUrl: './cardcontainer.component.html',
  styleUrl: './cardcontainer.component.css',
  imports: [NzEmptyComponent, NzFlexModule, NzCardComponent, CardComponent, NgFor],
  standalone: true
})
export class CardContainerComponent {
  productsService = inject(ProductsService);
}