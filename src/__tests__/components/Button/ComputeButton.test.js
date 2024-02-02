import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // Make sure to import screen
import ComputeButton from '../../../components/Button/ComputeButton';

describe('ComputeButton component', () => {
    it('renders button with the provided buttonName', () => {
        render(<ComputeButton buttonName="Compute Remainder" />);
        expect(screen.getByText('Compute Remainder')).toBeInTheDocument(); // Use screen
    });

    it('calls onClick function when the button is clicked', () => {
        const onClickMock = jest.fn();
        render(<ComputeButton onClick={onClickMock} buttonName="Compute" />);
        fireEvent.click(screen.getByText('Compute'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('matches prop types', () => {
        expect(ComputeButton.propTypes.buttonName).toBeDefined();
        expect(ComputeButton.propTypes.onClick).toBeDefined();
    });
});
