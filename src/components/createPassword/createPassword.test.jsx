import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CreatePassword } from '.';

describe('<CreatePassword />', () => {
    it('should render', () => {
        renderTheme(<CreatePassword />);
        expect(screen.getByRole('heading', { name: /criar senha/i })).toBeInTheDocument();
    });
});