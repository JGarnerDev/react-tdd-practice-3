import React from "react";

const Congratulations = ({ success }) => {
	return success ? (
		<div data-test="component-congratulations">
			<div data-test="congratulations-msg">Awww fuccc</div>
		</div>
	) : (
		<div data-test="component-congratulations" />
	);
};

export default Congratulations;
