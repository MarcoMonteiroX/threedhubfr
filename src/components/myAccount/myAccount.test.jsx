import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MyAccount } from '.';

describe('<MyAccount />', () => {
    it('should render', () => {
        renderTheme(<MyAccount />);
        expect(screen.getByRole('heading', { name: /minha conta/i })).toBeInTheDocument();
    });
});
