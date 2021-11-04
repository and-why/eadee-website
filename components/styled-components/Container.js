import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 1440px;
  padding: 0 var(--n);
  @media (min-width: 500px) {
    padding: 0 var(--l);
  }
  @media (min-width: 800px) {
    padding: 0 var(--xl);
  }
`;
