import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 2.5rem auto;
  padding: 0 2rem;

  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
  justify-items: center; */

  display: flex;
  flex-wrap: wrap;

  gap: 2rem;
`;
