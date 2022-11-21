import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { Text } from '../Text';
import { Actions, Image, ItemContainer, ProductContainer, ProductDetails, QuantityContainer, Summary, TotalContainer } from './styles';


interface CartProps {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onResetOrder: () => void;
}

export function Cart({ cartItems, onAdd, onDecrement, onResetOrder }: CartProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const totalPrice = cartItems.reduce(
    (acc, cartItem) => acc += (cartItem.quantity * cartItem.product.price)
    , 0);

  function handleConfirmOrder() {
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    onResetOrder();
    setIsModalVisible(false);
  }

  return (
    <>
      <OrderConfirmedModal visible={isModalVisible} onConfirmed={handleCloseModal} />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={({ product }) => product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 140 }}
          renderItem={({ item: cartItem }) => (
            <ItemContainer>
              <ProductContainer>
                <Image
                  source={{
                    uri: `http://192.168.15.42:3001/uploads/${cartItem.product.imagePath}`
                  }}
                />

                <QuantityContainer>
                  <Text size={14} color='#666'>{cartItem.quantity}x</Text>
                </QuantityContainer>

                <ProductDetails>
                  <Text size={14} weight='600'>{cartItem.product.name}</Text>
                  <Text size={14} color='#666' style={{ marginTop: 4 }}>{formatCurrency(cartItem.product.price)}</Text>
                </ProductDetails>
              </ProductContainer>
              <Actions>
                <TouchableOpacity style={{ marginRight: 24 }} onPress={() => onAdd(cartItem.product)}>
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </ItemContainer>
          )}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color='#666'>Total</Text>
              <Text size={20} weight='600'>{formatCurrency(totalPrice)}</Text>
            </>
          ) : (
            <Text size={16} color='#999'>Seu carrinho está vazio</Text>
          )}
        </TotalContainer>
        <Button
          label='Adicionar ao pedido'
          onPress={handleConfirmOrder}
          disabled={cartItems.length === 0}
          loading={isLoading}
        />
      </Summary>
    </>
  );
}
