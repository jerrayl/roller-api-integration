import { Injectable, signal, WritableSignal } from '@angular/core';
import { getProductAvailability } from '../../api';
import { ProductAvailability, ProductType } from '../../models/models';

@Injectable()
export class ProductAvailabilityService {
    productIds: string = '';
    productAvailability: WritableSignal<ProductAvailability | null> = signal(null);
    loading: WritableSignal<boolean> = signal(false);

    loadProductAvailability = async (productIds: string, date: string) => {
        this.loading.set(true);
        this.productIds = productIds;
        this.productAvailability.set(null);
        const productAvailability = await getProductAvailability(productIds, date);
        this.productAvailability.set(mapProductAvailability(productAvailability));
        this.loading.set(false);
    }

    loadProductTimes = async (date: string) => {
        this.loading.set(true);
        const productAvailability = await getProductAvailability(this.productIds, date);
        this.productAvailability.set(mapProductAvailability(productAvailability));
        this.loading.set(false);
    }
}

export const mapProductAvailability = (apiModel: any): ProductAvailability => {
    return { ...apiModel, type: ProductType[apiModel.type] }
}

