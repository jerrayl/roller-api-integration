import { PRODUCT_AVAILABILITY } from "./data/productAvailability"
import { PRODUCT_DETAIL } from "./data/productDetail";

const sleep = async (duration: number) => {
    await new Promise(r => setTimeout(r, duration));
}

export const login = async () => {
    await sleep(500);
    return;
}

export const getProductAvailability = async (productIds: string, date: string) => {
    await sleep(1000);
    return PRODUCT_AVAILABILITY;
}

export const getProducts = async () => {
    await sleep(1000);
    return PRODUCT_DETAIL;
} 
