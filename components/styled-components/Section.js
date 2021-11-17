import styled, { css } from 'styled-components';

export const Section = styled.div`
  margin-bottom: var(--m-vmin);
  ${(props) =>
    props.bgColor === 'white' &&
    css`
      margin-bottom: 0px;
    `}
`;
