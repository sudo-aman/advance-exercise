import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ value, onChange }) => {
    const handleChange = (event) => {
        event.preventDefault();
        onChange(event.target.value); // Passes the value of the input to the onChange callback
    };

    return <input type="text" value={value} onChange={e => handleChange(e)} />;
};


Text.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Text;


