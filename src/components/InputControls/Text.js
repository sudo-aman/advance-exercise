import PropTypes from "prop-types";

export default function Text({ value, onChange }) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
    );
}


Text.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};