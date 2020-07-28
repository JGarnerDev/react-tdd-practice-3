import React, { Component } from "react";
import { connect } from "react-redux";

import GuessedWords from "./GuessedWords";
import Congratulations from "./Congratulations";
import Input from "./Input";

import { getSecretWord } from "../actions";

export class UnconnectedApp extends Component {
	componentDidMount() {
		this.props.getSecretWord();
	}
	render() {
		return (
			<div className="App">
				<GuessedWords
					guessedWords={[
						{ guessedWord: "train", letterMatchCount: 3 },
						{ guessedWord: "party", letterMatchCount: 1 },
						{ guessedWord: "Stalin", letterMatchCount: 5 },
					]}
				/>
				<Input />
				<Congratulations success={true} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { success, guessedWords, secretWord } = state;
	return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
