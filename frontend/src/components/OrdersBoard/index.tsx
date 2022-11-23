import { useState } from 'react';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrderModal } from '../OrderModal';
import { Board, NoOrder, OrderItem } from './styles';

import { toast } from 'react-hot-toast';

interface OrdersBoardProps {
  iconBoard: string;
  nameBoard: string;
  orders: Order[];
  onDeleteOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, newStatus: Order['status']) => void;
}

export function OrdersBoard({ iconBoard, nameBoard, orders, onDeleteOrder, onChangeOrderStatus }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const quantityOrders = orders.length;

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const newStatus = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status: newStatus });

    onChangeOrderStatus(selectedOrder!._id, newStatus);
    setIsModalVisible(false);
    toast.success(`O Pedido da mesa ${selectedOrder?.table} teve o status alterado!`, {
      style: {
        padding: '16px 24px',
      },
    });
    setIsLoading(false);
  }

  async function handleDeleteOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    onDeleteOrder(selectedOrder!._id);
    setIsModalVisible(false);
    toast.success(`O Pedido da mesa ${selectedOrder?.table} foi cancelado!`, {
      style: {
        padding: '16px 24px',
      },
    });
    setIsLoading(false);
  }


  return (
    <Board>
      <>
        {isModalVisible && <OrderModal
          visible={isModalVisible}
          onClose={handleCloseModal}
          order={selectedOrder}
          onDeleteOrder={handleDeleteOrder}
          isLoading={isLoading}
          onChangeOrderStatus={handleChangeOrderStatus}
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
