import { Order } from '../../types/Order';
import { Board, NoOrder, OrderItem } from './styles';

interface OrdersBoardProps {
  iconBoard: string;
  nameBoard: string;
  quantityOrders: number;
  orders: Order[];
}

export function OrdersBoard({ iconBoard, nameBoard, quantityOrders, orders }: OrdersBoardProps) {
  return (
    <Board>
      <>
        <h2>{iconBoard} {nameBoard} <span>{quantityOrders}</span></h2>

        {
          orders.length
            ?
            orders.map((order: Order) => (
              <OrderItem key={order._id}>
                <h3>Mesa {order.table}</h3>
                <p>{order.products.length} iten(s)</p>
              </OrderItem>
            ))
            :
            <NoOrder>
              <p>Não há pedidos com esse status</p>
            </NoOrder>
        }
      </>
    </Board>
  );
}
