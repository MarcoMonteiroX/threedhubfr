import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { render } from '@testing-library/react';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
