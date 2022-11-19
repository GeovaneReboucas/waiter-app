import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '63747ac46ff584bf2fba9969',
    'table': '4',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668566867023-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '63747ac46ff584bf2fba996a'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668568022617-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '63747ac46ff584bf2fba996b'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard iconBoard='🕑' nameBoard='Fila de espera' quantityOrders={orders.length} orders={orders} />
      <OrdersBoard iconBoard='👩‍🍳' nameBoard='Em produção' quantityOrders={0} orders={[]} />
      <OrdersBoard iconBoard='✅' nameBoard='Pronto' quantityOrders={0} orders={[]} />
    </Container>
  );
}
