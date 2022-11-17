import styled from 'styled-components';

export const Board = styled.div`
  flex: 1 1 300px;

  width: 384px;
  height: min-content;

  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  gap: 1rem;

  h2{
    flex: 1;
    font-size: 1.1rem;
    font-weight: 700;

    span{
      font-size: 1rem;
      font-weight: 500;
      margin-left: 0.3rem;
    }
  }
`;

export const OrderItem = styled.button`
  height: 128px;
  width: 100%;

  background-color: #ffffff;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  transition: filter 0.3s;

  &:hover{
    filter: brightness(95%);
  }

  h3{
    font-size: 1rem;
    font-weight: 600;
  }

  p{
    font-size: 0.9rem;
    font-weight: 500;
    color: #666666;
  }
`;

export const NoOrder = styled.div`
  height: 128px;
  display: flex;
  align-items: center;

  p{
    font-size: 1rem;
    font-weight: 500;
    color: #D73035;
  }
`;
