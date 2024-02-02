import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'

describe('App component', () => {
  test('renders ModuloThreeFSM component', () => {
    render(<App />);
    const moduloThreeFSMHeader = screen.getByText('Modulo Three FSM');
    expect(moduloThreeFSMHeader).toBeInTheDocument();
  });
});
