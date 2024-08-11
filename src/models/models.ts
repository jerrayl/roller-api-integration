export enum ProductType {
    pass,
    sessionpass,
    addon,
    giftcard,
    wallet,
    package,
    custom,
    stock
}

export enum PaymentStatus {
    Draft,
    NoPaymentRequired,
    PendingPayment,
    PartiallyPaid,
    Paid,
    Cancelled,
    Deleted
}

export type Product = {
    id: string;
    name: string;
    description: string;
    imageurl: string;
    cost: number;
    tax: number;
    isTaxInclusive: boolean;
}

export type Location = {
    id: string;
}

export type Allocation = {
    productId: string;
    capacityRemaining: number | null;
    bookableCapacityRemaining: number;
    locations: Location[];
}

export type Availability = {
    date: string;
    onlineSalesOpen: boolean;
    allocations: Allocation[];
}

export type Session = {
    date: string;
    name: string;
    startTime: string;
    endTime: string;
    capacityRemaining: number | null;
    onlineSalesOpen: boolean;
    allocations: Allocation[];
}

export type ProductAvailability = {
    id: string;
    name: string;
    type: ProductType;
    description: string;
    imageUrl: string;
    products: Product[];
    availabilities: Availability[];
    sessions: Session[];
}

export type ProductDetail = {
    id: string;
    name: string;
    shortDescription: string;
    description: string;
    imageUrl: string;
    products: Product[];
}

export type BookingItem = {
    productId: string;
    quantity: string;
    bookingDate: string;
    startTime: string;
}

export type Booking = {
    bookingReference: string;
    uniqueId: string;
    createdDate: string;
    status: PaymentStatus;
    name: string;
    customerId: string;
    total: number;
    items: BookingItem[];
}