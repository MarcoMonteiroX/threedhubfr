import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CreateOrder } from '.';

describe('<CreateOrder />', () => {
    it('should render', () => {
        renderTheme(<CreateOrder />);
        expect(screen.getByRole('heading', { name: /criar pedido/i })).toBeInTheDocument();
    });
});