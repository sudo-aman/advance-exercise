import PropTypes from "prop-types";

export default function ComputeButton({ onClick, buttonName }) {
    return (
        <button onClick={onClick}>{buttonName}</button>
    );
}


ComputeButton.propTypes = {
    buttonName: PropTypes.string,
    onClick: PropTypes.func,
};