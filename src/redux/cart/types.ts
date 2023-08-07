export type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    thickness: string;
    width: number;
    count: number;
}

export interface CartSliceState {
    totalPrice: number;
    items: CartItem[]
}
