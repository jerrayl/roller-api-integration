import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { getProducts, login } from '../api';
import { ProductDetail } from '../models/models';
import { matchesTarget } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  searchValue = signal('');
  products: WritableSignal<ProductDetail[] | null> = signal(null);

  filteredTodos = computed(() =>
    this.products()?.filter(x =>
      matchesTarget([x.name, x.shortDescription, x.description], this.searchValue())
    ) ?? []
  );

  constructor() {
    login().then(() => this.loadProducts());
  }

  loadProducts = async () => {
    this.products.set(null);
    const products = await getProducts();
    this.products.set(products.map(mapProductDetail));
  }
}

export const mapProductDetail = (apiModel: any): ProductDetail => {
  return {...apiModel}
}
