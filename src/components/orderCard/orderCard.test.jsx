import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { OrderCard } from '.';

describe('<OrderCard />', () => {
    it('should render', () => {
        renderTheme(<OrderCard>children</OrderCard>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});
