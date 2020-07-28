import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "../actions";

export class UnconnectedInput extends Component {
	constructor(props) {
		super(props);
		this.state = { currentGuess: null };
		this.submitGuessedWord = this.submitGuessedWord.bind(this);
	}

	submitGuessedWord(e) {
		e.preventDefault();
		const guessedWord = this.state.currentGuess;

		if (guessedWord && guessedWord.length > 0) {
			this.props.guessWord(guessedWord);
			this.setState({ currentGuess: "" });
		}
	}

	render() {
		const contents = this.props.success ? null : (
			<form action="">
				<input
					type="text"
					data-test="input-box"
					value={this.state.currentGuess}
					onChange={(e) => this.setState({ currentGuess: e.target.value })}
				/>
				<button
					type="submit"
					data-test="submit-button"
					onClick={(e) => this.submitGuessedWord(e)}
				/>
			</form>
		);
		return <div data-test="component-input">{contents}</div>;
	}
}

const mapStateToProps = ({ success }) => {
	return {
		success,
	};
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
