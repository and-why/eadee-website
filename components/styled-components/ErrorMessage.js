import styled, { css } from 'styled-components';

export const ErrorMessageStyles = styled.div`
  background: #ff5c5c;
  padding: 1em;
  margin: 1em 0;
  color: white;
  font-size: 2em;
  border-left: 10px solid red;
  ${(props) =>
    props.orange &&
    css`
      font-size: 1.4em;
      background: var(--primary-25, #fce2b4);
      border-left: 10px solid var(--primary);
      color: var(--dark);
      a {
        border-bottom: 2px solid orange;
        &:hover {
          color: var(--black);
        }
      }
    `}
`;
