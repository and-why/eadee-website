import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const theme = {
  html: {
    fontFamily: 'Inter',
  },
};
const StyledComponentsRenderer = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) => render(ui, { wrapper: StyledComponentsRenderer, ...options });

export * from '@testing-library/react';
export { customRender as render };
