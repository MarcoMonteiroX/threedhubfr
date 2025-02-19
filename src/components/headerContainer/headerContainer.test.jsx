import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { HeaderContainer } from '.';

describe('<HeaderContainer />', () => {
  it('should render', () => {
    renderTheme(<HeaderContainer>children</HeaderContainer>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
