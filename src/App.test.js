// FSMComponent.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders input field and submit button', () => {
    render(<App />);
    expect(screen.getByLabelText(/Input String:/i)).toBeInTheDocument();
    expect(screen.getByText(/Test String/i)).toBeInTheDocument();
  });

  test('accepts valid input strings', () => {
    render(<App />);
    const inputField = screen.getByLabelText(/Input String:/i);
    const submitButton = screen.getByText(/Test String/i);

    fireEvent.change(inputField, { target: { value: '101010' } });
    fireEvent.click(submitButton);
    expect(screen.getByText(/Result: Accepted/i)).toBeInTheDocument();
  });

  test('rejects invalid input strings', () => {
    render(<App />);
    const inputField = screen.getByLabelText(/Input String:/i);
    const submitButton = screen.getByText(/Test String/i);

    fireEvent.change(inputField, { target: { value: '2020' } }); // Contains invalid symbol '2'
    fireEvent.click(submitButton);
    expect(screen.getByText(/Result: Rejected/i)).toBeInTheDocument();
  });

  test('handles empty input string', () => {
    render(<App />);
    const submitButton = screen.getByText(/Test String/i);

    fireEvent.click(submitButton);
    expect(screen.getByText(/Result: Accepted/i)).toBeInTheDocument();
  });

});
