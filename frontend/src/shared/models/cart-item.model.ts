export class CartItem {
    _id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;

    cartItem: {
        quantity: number;
    }
}