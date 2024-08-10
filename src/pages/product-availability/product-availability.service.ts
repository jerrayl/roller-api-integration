import { Injectable, signal, WritableSignal } from '@angular/core';
import { getProductAvailability } from '../../api';
import { ProductAvailability, ProductType } from '../../models/models';

@Injectable()
export class ProductAvailabilityService {
  productIds: string = '';
  productAvailability: WritableSignal<ProductAvailability | null> = signal(null);

  loadProductAvailability = async (productIds: string, date: string) => {
    this.productIds = productIds;
    this.productAvailability.set(null);
    const productAvailability = await getProductAvailability(productIds, date);
    this.productAvailability.set(mapProductAvailability(productAvailability));
  }
}

export const mapProductAvailability = (apiModel: any): ProductAvailability => {
  return {...apiModel, type: ProductType[apiModel.type]}
}

