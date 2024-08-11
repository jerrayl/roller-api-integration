import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'search-component',
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
