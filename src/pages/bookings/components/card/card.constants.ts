import { PaymentStatus } from "../../../../models/models";

export const PaymentStatusMappings: { [key in PaymentStatus]: string } = {
    [PaymentStatus.Draft]: 'Draft',
    [PaymentStatus.NoPaymentRequired]: 'No Payment Required',
    [PaymentStatus.PendingPayment]: 'Pending Payment',
    [PaymentStatus.PartiallyPaid]: 'Partially Paid',
    [PaymentStatus.Paid]: 'Paid',
    [PaymentStatus.Cancelled]: 'Cancelled',
    [PaymentStatus.Deleted]: 'Deleted',
}

export const PaymentStatusColors: { [key in PaymentStatus]: string } = {
    [PaymentStatus.Draft]: 'gold',
    [PaymentStatus.NoPaymentRequired]: 'green',
    [PaymentStatus.PendingPayment]: 'gold',
    [PaymentStatus.PartiallyPaid]: 'gold',
    [PaymentStatus.Paid]: 'green',
    [PaymentStatus.Cancelled]: 'red',
    [PaymentStatus.Deleted]: 'red',
}