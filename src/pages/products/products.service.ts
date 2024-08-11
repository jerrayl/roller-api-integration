import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { getProducts, login } from '../../api';
import { ProductDetail } from '../../models/models';
import { matchesTarget } from '../../utils';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    searchValue = signal('');
    products: WritableSignal<ProductDetail[] | null> = signal(null);

    filteredProducts = computed(() =>
        this.products()?.filter(x =>
            matchesTarget([x.name, x.shortDescription, x.description], this.searchValue())
        ) ?? []
    );

    productNamesById: Signal<{[key: string]:string}> = computed(() => 
        !this.products 
        ? {} 
        : Object.fromEntries(
            this.products()!.map(x => [x.id, x.name]).concat(
            this.products()!.flatMap(x => x.products.map(x => [x.id, x.name]))
            )
        )
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
    return { ...apiModel }
}
