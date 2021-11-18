import styled, { css } from 'styled-components';

export const Section = styled.div`
  ${(props) =>
    props.roughEdge === 'bottom' &&
    css`
      margin-bottom: 36px;
    `}
  ${(props) =>
    props.roughEdge === 'top' &&
    css`
      margin-top: 36px;
    `}
    ${(props) =>
    props.roughEdge === 'both' &&
    css`
      margin: 36px 0;
    `}
`;
