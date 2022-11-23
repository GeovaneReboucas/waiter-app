import { Actions, ModalBody, OrderDetails, Overlay } from './styles';

import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import { useEffect } from 'react';

interface OrderModalProps {
  visible: boolean;
  onClose: () => void;
  order: Order | null;
  onDeleteOrder: () => Promise<void>;
  isLoading: boolean;
  onChangeOrderStatus: () => Promise<void>;
}

export function OrderModal({ visible, onClose, order, onDeleteOrder, isLoading, onChangeOrderStatus }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  const priceTotalOrder = order.products.reduce((acc, { product, quantity }) => {
    return acc + (product.price * quantity);
  }, 0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key == 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [onClose]);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order?.table}</strong>

          <button type='button' onClick={onClose}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>

          <div>
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <small>Itens</small>

          {order.products.map(({ _id, product, quantity }) => (
            <div className="item" key={_id}>
              <img src={`http://localhost:3001/uploads/${product.imagePath}`} alt={product.name} />
              <small>{quantity}x</small>
              <div className='product-datails'>
                <strong>{product.name}</strong>
                <small>{formatCurrency(product.price)}</small>
              </div>
            </div>
          ))}

          <div className='total'>
            <small>Total</small>
            <strong>{formatCurrency(priceTotalOrder)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button type='button' className='primary' onClick={onChangeOrderStatus} disabled={isLoading}>
              <span>{order.status === 'WAITING' ? '👩‍🍳': '✅'}</span>
              <strong>{order.status === 'WAITING' ? 'Iniciar Produção': 'Concluir Pedido'}</strong>
            </button>
          )}

          <button type='button' className='secondary' onClick={onDeleteOrder} disabled={isLoading}>
            Deletar Pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
