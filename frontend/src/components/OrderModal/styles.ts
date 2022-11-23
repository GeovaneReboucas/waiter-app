import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #ffffff;
  width: 480px;
  border-radius: 8px;
  padding: 2rem;
  max-height: 80vh;
  overflow-y: scroll;
  z-index: 99;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c9c9c9;
    border-radius: 20px;
  }

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 1.4rem;
    }

    button{
      background-color: transparent;
      border: none;
      line-height: 0;

    }
  }

  .status-container{
    margin-top: 2rem;

    small{
      font-size: 0.9rem;
      opacity: 0.8;
    }

    div{
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  small{
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .item{
    display: flex;

    img{
      width: 80px;
      height: 49px;
      border-radius: 6px;
      object-fit: cover;
    }

    > small{
      font-size: 0.9rem;

      margin: 0 6px 0 12px;
    }

    .product-datails{
      display: flex;
      flex-direction: column;
      gap: 4px;

      strong{
        font-size: 1rem;
        font-weight: 600;
      }

      small{
        font-size: 0.9rem;
      }
    }

  }

  .total{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;

    small{
      font-size: 0.9rem;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  button:disabled{
    cursor: not-allowed;
    opacity: 0.5;
  }

  .primary{
    /* width: 100%; */
    height: 44px;
    background-color: #333333;
    border-radius: 48px;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    transition: filter 0.3s;

    &:hover{
      filter: brightness(75%);
    }

    strong{
      font-size: 1rem;
    }
  }

  .secondary{
    padding: 14px 24px;
    color: #D73035;
    font-weight: 700;

    background: transparent;
    border: none;

    &:hover{
      filter: brightness(75%);
    }
  }
`;
