import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 48px;
  height: 40px;
  border-radius: 6px;
`;

export const QuantityContainer = styled.View`
  min-width: 20px;
  margin-left: 12px;
`;

export const ProductDetails = styled.View``;


export const Actions = styled.View`
  flex-direction: row;
`;

export const Summary = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalContainer = styled.View`
  flex: 1;
  margin-right: 22px;
`;
