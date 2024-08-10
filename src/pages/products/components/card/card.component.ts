import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  imports: [NzCardModule],
  standalone: true
})
export class CardComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';

  constructor(private _router: Router) { }

  navigateToProduct(id: string){
    this._router.navigateByUrl(`/availability/${id}`);
  }

}