import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 1080px;
  padding: 0 var(--n);
  @media (min-width: 500px) {
    padding: 0 var(--m);
  }
  @media (min-width: 1000px) {
    padding: 0 var(--xl);
  }
`;
