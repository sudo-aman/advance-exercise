import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ModuloThreeFSM from '../../components/ModuloThreeFSM';
import '@testing-library/jest-dom'

describe('ModuloThreeFSM', () => {
    it('renders component elements', () => {
        render(<ModuloThreeFSM />);
        expect(screen.getByText('Modulo Three FSM')).toBeInTheDocument();
        expect(screen.getByLabelText('Enter binary string:')).toBeInTheDocument();
        expect(screen.getByText('Compute Remainder')).toBeInTheDocument();
        expect(screen.getByText(/State:/i)).toBeInTheDocument();
        expect(screen.getByText(/Output:/i)).toBeInTheDocument();
    });

    it('updates input value correctly', () => {
        render(<ModuloThreeFSM />);
        const inputElement = screen.getByLabelText('Enter binary string:');
        fireEvent.change(inputElement, { target: { value: '101' } });
        expect(inputElement.value).toBe('101');
    });

    it('computes remainder correctly on button click', () => {
        render(<ModuloThreeFSM />);
        const inputElement = screen.getByLabelText('Enter binary string:');
        fireEvent.change(inputElement, { target: { value: '101' } });
        fireEvent.click(screen.getByText('Compute Remainder'));
        expect(screen.getByText(/State: S2/i)).toBeInTheDocument();
        expect(screen.getByText(/Output: 2/i)).toBeInTheDocument();
    });


    it('handles empty input string', () => {
        render(<ModuloThreeFSM />);
        fireEvent.click(screen.getByText('Compute Remainder'));
        expect(screen.getByText(/Output: 0/i)).toBeInTheDocument();
        expect(screen.getByText(/State: S0/i)).toBeInTheDocument();
    });

    it('handles input with leading or trailing spaces', () => {
        render(<ModuloThreeFSM />);
        const inputElement = screen.getByLabelText('Enter binary string:');
        fireEvent.change(inputElement, { target: { value: ' 101 ' } });
        fireEvent.click(screen.getByText('Compute Remainder'));
        expect(screen.getByText(/State: S2/i)).toBeInTheDocument();
        expect(screen.getByText(/Output: 2/i)).toBeInTheDocument();
    });

    it('handles invalid characters in input', () => {
        render(<ModuloThreeFSM />);
        const inputElement = screen.getByLabelText('Enter binary string:');
        fireEvent.change(inputElement, { target: { value: '1012' } });
        fireEvent.click(screen.getByText('Compute Remainder'));
        expect(screen.getByText(/Output: 0/)).toBeInTheDocument();
        expect(screen.getByText(/State: S0/)).toBeInTheDocument();
    });
});
