import styled, { css } from 'styled-components';
import stylesForAll from './StylesForAll';

export const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid var(--color-gray);
  background-color: var(--color-white);
  cursor: pointer;
  border-radius: var(--border-radius-medium);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  min-width: 70px;
  transition: var(--transition);
  svg {
    height: 15px;
    width: 15px;
    margin-right: 20px;
  }
  &:hover,
  &:active,
  &:focus {
    transition: var(--transition);
    background-color: var(--color-gray);
    border: 1px solid var(--color-gray);
  }
  :disabled {
    color: var(--color-gray);
    background: var(--color-gray);
    border: 1px solid var(--color-gray);
    cursor: not-allowed;
    :hover {
      background: var(--color-gray);
      border: 1px solid var(--color-gray);
    }
  }
  ${(props) =>
    (props.primary || props.buttonStyle === 'primary') &&
    css`
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
      color: var(--color-dark);
      &:hover,
      &:active,
      &:focus {
        transition: var(--transition);
        background-color: var(--color-primary-80);
        border: 1px solid var(--color-primary-80);
      }
    `};
  ${(props) =>
    (props.secondary || props.buttonStyle === 'secondary') &&
    css`
      background-color: rgba(255, 255, 255, 0);
      border: 1px solid rgba(255, 255, 255, 0);
      color: var(--color-dark);
      &:hover,
      &:active,
      &:focus {
        transition: var(--transition);
        background-color: var(--color-gray);
        border: 1px solid var(--color-gray);
      }
    `};
  ${(props) =>
    (props.light || props.buttonStyle === 'light') &&
    css`
      background-color: var(--white, #fff);
      border: 1px solid var(--white, #fff);
      color: var(--color-dark);
      &:hover,
      &:active,
      &:focus {
        transition: var(--transition);
        background-color: var(--color-gray);
        border: 1px solid var(--color-gray);
      }
    `};
  ${(props) =>
    (props.dark || props.buttonStyle === 'dark') &&
    css`
      background-color: var(--color-dark);
      border: 1px solid var(--color-dark);
      color: var(--color-white);
      &:hover,
      &:active,
      &:focus {
        transition: var(--transition);
        background-color: var(--color-black);
        border: 1px solid var(--color-black);
      }
    `};
  ${(props) =>
    (props.warning || props.buttonStyle === 'warning') &&
    css`
      background-color: var(--color-red);
      border: 1px solid var(--color-red);
      color: var(--color-white);
      &:hover,
      &:active,
      &:focus {
        transition: var(--transition);
        background-color: var(--color-red);
        border: 1px solid var(--color-red);
        box-shadow: 1px 1px 8px 3x rgba(0, 0, 0, 0.1);
      }
    `};
  ${(props) => stylesForAll(props)}
`;

// export const Button = ({ children, ...props }) => {
//   return <PrimaryButton {...props}>{children}</PrimaryButton>;
// };
