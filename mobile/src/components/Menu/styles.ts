import styled from 'styled-components/native';

export const ProductContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ProductDetails = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  width: 120px;
  height: 95px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(204, 204, 204, 0.3);
  margin: 24px 0;
`;

export const AddToCartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
`;
