import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Home } from '.';

describe('<Home />', () => {
  it('should render', () => {
    renderTheme(<Home>children</Home>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
