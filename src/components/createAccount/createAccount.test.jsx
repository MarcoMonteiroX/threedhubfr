import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CreateAccount } from '.';

describe('<CreateAccount />', () => {
    it('should render', () => {
        renderTheme(<CreateAccount />);
        expect(screen.getByRole('heading', { name: /criar conta/i })).toBeInTheDocument();
    });
});