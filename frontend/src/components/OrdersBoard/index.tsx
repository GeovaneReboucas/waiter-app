import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, NoOrder, OrderItem } from './styles';

interface OrdersBoardProps {
  iconBoard: string;
  nameBoard: string;
  quantityOrders: number;
  orders: Order[];
}

export function OrdersBoard({ iconBoard, nameBoard, quantityOrders, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }


  return (
    <Board>
      <>
        {isModalVisible && <OrderModal
          visible={isModalVisible}
          onClose={handleCloseModal}
          order={selectedOrder}
        />}
        <h2>{iconBoard} {nameBoard} <span>{quantityOrders}</span></h2>

        {
          orders.length
            ?
            orders.map((order: Order) => (
              <OrderItem key={order._id} onClick={() => handleOpenModal(order)}>
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
