import { Component, computed, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AVAILABILITY_ROUTE } from '../../../../app/app.routes';
import { Product } from '../../../../models/models';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrl: './card.component.less',
  imports: [NzCardModule, NzFlexModule],
  standalone: true
})
export class CardComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() products: Product[] = [];

  minProductCost = computed(() => this.products.filter(x => x.cost).length > 0 
    ? Math.min(...this.products.filter(x => x.cost).map(x => x.cost)) 
    : null
  );

  constructor(private _router: Router) { }

  navigateToProduct(id: string){
    this._router.navigateByUrl(`${AVAILABILITY_ROUTE}/${id}`);
  }
}