import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Button } from '.';

describe('<Button />', () => {
  it('should render', () => {
    renderTheme(<Button>children</Button>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
