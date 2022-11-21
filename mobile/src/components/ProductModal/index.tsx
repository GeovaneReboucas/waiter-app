import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { CloseButton, Footer, FooterContainer, Header, Image, Ingredient, IngredientsContainer, ModalBody, PriceContainer } from './styles';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ visible, onClose, product, onAddToCart }: ProductModalProps) {
  if (!product) {
    return null;
  }

  function handleAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType='slide'
      presentationStyle='pageSheet'
    >
      <Image
        source={{
          uri: `http://192.168.15.42:3001/uploads/${product.imagePath}`
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight='600'>{product.name}</Text>
          <Text size={16} color='#666' style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </Header>

        {!!product.ingredients.length && (
          <IngredientsContainer>
            <Text weight='600' color='#666' style={{ marginBottom: 16 }}>Ingredientes</Text>
            <FlatList
              data={product.ingredients}
              keyExtractor={(ingredient) => ingredient._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={16} color='#666' style={{ marginLeft: 16 }}>{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color='#666'>Preço</Text>
            <Text size={20} weight='600'>{formatCurrency(product.price)}</Text>
          </PriceContainer>
          <Button label='Adicionar ao pedido' onPress={handleAddToCart} />
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
