import { ProductType } from "../../models/models";

export const ProductTypeMappings: { [key in ProductType]: string } = {
    [ProductType.pass]: 'Pass',
    [ProductType.sessionpass]: 'Session Pass',
    [ProductType.addon]: 'Addon',
    [ProductType.giftcard]: 'Gift Card',
    [ProductType.wallet]: 'Wallet',
    [ProductType.package]: 'Package',
    [ProductType.custom]: 'Custom',
    [ProductType.stock]: 'Stock'
}