import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Text from '../../../components/InputControls/Text';
import PropTypes from 'prop-types';
import '@testing-library/jest-dom'

describe('Text component', () => {
    it('renders an input field with the provided value', () => {
        render(<Text value="Hello" onChange={() => { }} />);
        expect(screen.getByDisplayValue('Hello')).toBeInTheDocument();
    });

    it('calls onChange function when input value changes', () => {
        const onChangeMock = jest.fn();
        render(<Text value="" onChange={onChangeMock} />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'New Value' } });
        expect(onChangeMock).toHaveBeenCalledWith('New Value');
    });

    it('validates prop types', () => {
        expect(Text.propTypes).toHaveProperty('value', PropTypes.string);
        expect(Text.propTypes).toHaveProperty('onChange', PropTypes.func);
    });
});
