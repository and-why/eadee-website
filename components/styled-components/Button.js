import styled, { css } from 'styled-components';
import stylesForAll from './StylesForAll';

export const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid var(--gray);
  background-color: var(--white);
  cursor: pointer;
  border-radius: var(--brs);
  font-size: 14px;
  line-height: 1.3;
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  min-width: 70px;
  svg {
    height: 15px;
    width: 15px;
    margin-right: 20px;
  }
  &:hover,
  &:active,
  &:focus {
    background-color: var(--gray);
    border: 1px solid var(--gray);
  }
  :disabled {
    color: var(--gray);
    background: var(--gray);
    border: 1px solid var(--gray);
    cursor: not-allowed;
    :hover {
      background: var(--gray);
      border: 1px solid var(--gray);
    }
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: var(--primary);
      border: 1px solid var(--primary);
      color: var(--white);
      &:hover,
      &:active,
      &:focus {
        background-color: var(--primary-80);
        border: 1px solid var(--primary-80);
      }
    `};
  ${(props) =>
    props.secondary &&
    css`
      background-color: rgba(255, 255, 255, 0);
      border: 1px solid rgba(255, 255, 255, 0);
      color: var(--dark);
      &:hover,
      &:active,
      &:focus {
        background-color: var(--gray);
        border: 1px solid var(--gray);
      }
    `};
  ${(props) =>
    props.light &&
    css`
      background-color: var(--white, #fff);
      border: 1px solid var(--white, #fff);
      color: var(--dark);
      &:hover,
      &:active,
      &:focus {
        background-color: var(--gray);
        border: 1px solid var(--gray);
      }
    `};
  ${(props) =>
    props.dark &&
    css`
      background-color: var(--dark);
      border: 1px solid var(--dark);
      color: var(--white);
      &:hover,
      &:active,
      &:focus {
        background-color: var(--black);
        border: 1px solid var(--black);
      }
    `};
  ${(props) =>
    props.warning &&
    css`
      background-color: var(--red);
      border: 1px solid var(--red);
      color: var(--white);
      &:hover,
      &:active,
      &:focus {
        background-color: var(--red);
        border: 1px solid var(--red);
        box-shadow: 1px 1px 8px 3x rgba(0, 0, 0, 0.1);
      }
    `};
  ${(props) => stylesForAll(props)}
`;

// export const Button = ({ children, ...props }) => {
//   return <PrimaryButton {...props}>{children}</PrimaryButton>;
// };
