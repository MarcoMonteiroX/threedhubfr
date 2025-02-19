import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { RequestOrders } from '.';

describe('<RequestOrders />', () => {
  it('should render', () => {
    renderTheme(<RequestOrders>children</RequestOrders>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
