export interface Order {
  _id: string;
  table: string;
  status: string;
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    }
  }[];
}
