import styled from 'styled-components';

export const Container = styled.header`
  background-color: #D73035;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  height: 198px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;

  .page-details{
    h1{
      font-size: 2rem;
    }

    h2{
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
