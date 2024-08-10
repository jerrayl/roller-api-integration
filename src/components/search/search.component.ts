import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ProductsService } from '../../services/services.products';

@Component({
  selector: 'search-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './search.component.html',
  imports: [FormsModule, NzInputModule, NzIconModule],
  standalone: true
})
export class SearchComponent {
  productsService = inject(ProductsService);

  onInput(event: Event): void {
    this.productsService.searchValue.set((event.target as HTMLInputElement).value);
  }
}
