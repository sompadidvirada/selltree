import { BroadcastChannel } from "broadcast-channel";

// broadcast.js
export const orderChannel = new BroadcastChannel('order-channel');
export const billUserChannel = new BroadcastChannel('bil-user-channel');
export const paymentMethod = new BroadcastChannel('payment-method')
export const numberPayment = new BroadcastChannel('number-payment')
export const DeleteMenu = new BroadcastChannel('delete-menu')
