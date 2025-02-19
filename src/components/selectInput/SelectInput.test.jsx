import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SelectInput } from '.';

describe('<SelectInput />', () => {
  it('should render', () => {
    renderTheme(<SelectInput>children</SelectInput>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
