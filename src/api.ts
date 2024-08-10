import { PRODUCT_AVAILABILITY } from "./data/productAvailability"
import { PRODUCT_DETAIL } from "./data/productDetail";
import { ProductAvailability, ProductType } from "./models/models";

const sleep = async (duration: number) => {
    await new Promise(r => setTimeout(r, duration));
}

export const login = async () => {
    await sleep(500);
    return;
} 

export const getProductAvailability = async () => {
    await sleep(1000);
    return PRODUCT_AVAILABILITY;
} 

export const getProducts = async () => {
    await sleep(1000);
    return PRODUCT_DETAIL;
} 

export const productAvailabilityMapping = (apiModel: any): ProductAvailability => {
    return {...apiModel, type: ProductType[apiModel.type]}
}

