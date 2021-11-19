import styled from 'styled-components';
import stylesForAll from './StylesForAll';

export const Form = styled.form`
  border: 1px solid var(--color-gray_light);
  display: flex;
  flex-direction: column;
  outline: none;
  border-radius: var(--border-radius-large);
  max-width: 500px;
  width: 100%;
  position: relative;
  margin: var(--l) auto;
  box-shadow: var(--box-shadow);
  .formInner {
    padding: var(--l);
  }
  h2 {
    margin: 0 0 16px;
  }
  label {
    margin-bottom: var(--xs);
    font-size: var(--n);
  }
  input,
  select,
  textarea {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 8px;
    border: 1px solid var(--color-gray);
    border-radius: var(--border-radius-small);
    width: 100%;
    height: var(--xl);
    &:focus-visible,
    &:focus {
      outline: -webkit-focus-ring-color auto 1px;
      outline-color: var(--primary);
    }
  }
  textarea {
    min-height: 150px;
    resize: vertical;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--s);
    border: none;
    display: flex;
    flex-direction: column;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-gray);
    text-align: left;
    padding: 1em 2em;
    border-radius: 0 0 9px 9px;
    p {
      color: var(--dark);
      font-size: 14px;
      margin: 0;
    }
    button {
      margin-left: 8px;
    }
  }
  .icon-field {
    display: flex;
    position: relative;
    input {
      padding-left: 48px;
    }
    span {
      color: var(--dark);
      position: absolute;
      top: 1px;
      left: 8px;
      font-size: 24px;
      font-weight: bold;
    }
  }
  .date-field {
    display: flex;
    align-items: center;
    p {
      margin: 0;
    }
    input {
      max-width: 60px;
      border-radius: 0;
      &:first-child {
        border-radius: var(--brs) 0 0 var(--brs);
      }
      &:last-child {
        border-radius: 0 var(--brs) var(--brs) 0;
        max-width: 80px;
      }
    }
  }
`;

export const SignInForm = styled.form`
  border: 1px solid var(--gray);
  display: flex;
  text-align: center;
  flex-direction: column;
  outline: none;
  border-radius: var(--brl);
  max-width: 400px;
  width: 100%;
  position: relative;
  margin-bottom: 25px;
  svg {
    height: 100%;
    width: 100%;
  }
  h1 {
    margin: 0;
    font-size: 20px;
  }
  p {
    font-size: 12px;
    margin-bottom: 8px;
  }
  .inner {
    padding: 50px 25px;
    border: none;
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 1em;
    margin-bottom: 25px;
  }
  input,
  select {
    padding: 1em;
    margin-bottom: 1em;
    border: 1px solid var(--gray);
    border-radius: var(--brs);
    width: 100%;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--lightgray);
    text-align: right;
    padding: 1em 2em;
    border-radius: 0 0 9px 9px;
  }
`;

export const Input = styled.input`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  padding: 8px;
  border: 1px solid var(--gray);
  border-radius: var(--brs);
  height: 36px;
  &:focus-visible,
  &:focus {
    outline: -webkit-focus-ring-color auto 1px;
    outline-color: var(--primary);
  }
  ${(props) => stylesForAll(props)}
`;
export const Select = styled.select`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  padding: 8px;
  border: 1px solid var(--gray);
  border-radius: var(--brs);
  height: 36px;
  &:focus-visible,
  &:focus {
    outline: -webkit-focus-ring-color auto 1px;
    outline-color: var(--primary);
  }
  ${(props) => stylesForAll(props)}
`;
export const TextArea = styled.textarea`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  padding: 8px;
  border: 1px solid var(--gray);
  border-radius: var(--brs);
  min-height: 150px;
  &:focus-visible,
  &:focus {
    outline: -webkit-focus-ring-color auto 1px;
    outline-color: var(--primary);
  }
  ${(props) => stylesForAll(props)}
`;
