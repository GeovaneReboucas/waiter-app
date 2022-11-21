import { useState } from 'react';

import { products as mockProducts } from '../mocks/products';

import { ActivityIndicator } from 'react-native';
import { Button } from '../components/Button';
import { Cart } from '../components/Cart';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { TableModal } from '../components/TableModal';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer, CenteredContainer } from './styles';
import { Empty } from '../components/Icons/Empty';
import { Text } from '../components/Text';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleResetOrder() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

      if (itemIndex === -1) {
        // Igual a spread operator
        return prevState.concat({
          product,
          quantity: 1,
        });
      }

      const newCartItems = [...prevState];
      const selectedItem = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...selectedItem,
        quantity: selectedItem.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDecrementToCart(product: Product) {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

      const newCartItems = [...prevState];
      const selectedItem = newCartItems[itemIndex];

      if (selectedItem.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...selectedItem,
        quantity: selectedItem.quantity - 1,
      };

      return newCartItems;
    });
  }

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} onCancelOrder={handleResetOrder} />

        {!isLoading ? (
          <>
            <CategoriesContainer>
              <Categories />
            </CategoriesContainer>

            {products.length ? (
              <MenuContainer>
                <Menu onAddToCart={handleAddToCart} products={products} />
              </MenuContainer>
            ) : (
              <CenteredContainer>
                <Empty />
                <Text color='#666' style={{ marginTop: 24 }}>
                  Nenhum produto foi encontrado!
                </Text>
              </CenteredContainer>
            )}
          </>
        ) : (
          <CenteredContainer>
            <ActivityIndicator color='#D73035' size='large' />
          </CenteredContainer>
        )}
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable ? (
            <Button label='Novo Pedido' onPress={() => setIsTableModalVisible(true)} disabled={isLoading} />
          ) : (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementToCart}
              onResetOrder={handleResetOrder}
            />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        setVisible={setIsTableModalVisible}
        onSave={handleSaveTable}
      />
    </>
  );
}
