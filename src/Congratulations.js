import React from "react";
import PropTypes from "prop-types";

/**
 * Functional React component for a victory condition congratulations message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is falsy)
 */

const Congratulations = ({ success }) => {
	return success ? (
		<div data-test="component-congratulations">
			<div data-test="congratulations-message">Winner!</div>
		</div>
	) : (
		<div data-test="component-congratulations" />
	);
};

Congratulations.defaultProps = {
	success: false,
};

Congratulations.propTypes = {
	success: PropTypes.bool.isRequired,
};

export default Congratulations;
