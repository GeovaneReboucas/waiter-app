import { products } from '../../mocks/products';

import { FlatList } from 'react-native';
import { Text } from '../Text';
import { ProductContainer, ProductDetails, Image, Separator, AddToCartButton } from './styles';

import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

export function Menu(){
  return(
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(product) => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <ProductContainer>
          <Image
            source={{
              uri: `http://192.168.15.42:3001/uploads/${product.imagePath}`
            }}
          />

          <ProductDetails>
            <Text weight='600'>{product.name}</Text>
            <Text size={14} color='#666' style={{ marginVertical: 8 }}>{product.description}</Text>
            <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
          </ProductDetails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </ProductContainer>
      )}
    />
  );
}
