export class Cart {
    constructor(
        public userId: string,
        public productId: string,
        public productName: string,
        public quantity: number
    ){}
}
