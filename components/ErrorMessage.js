import { ErrorMessageStyles } from './styled-components/ErrorMessage';

export default function ErrorMessage({ error }) {
  if (!error) return null;

  return (
    <ErrorMessageStyles>
      {error || error.message || error.statusText || console.log(error)}
    </ErrorMessageStyles>
  );
}
