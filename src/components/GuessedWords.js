import React from "react";
import PropTypes from "prop-types";

function GuessedWords(props) {
	let contents;
	if (props.guessedWords.length === 0) {
		contents = (
			<span data-test="guess-instructions">Try to guess the secret word!</span>
		);
	} else {
		const guessedWordRow = props.guessedWords.map((guess, i) => {
			return (
				<tr data-test="guessed-word" key={i}>
					<td>{guess.guessedWord}</td>
					<td>{guess.letterMatchCount}</td>
				</tr>
			);
		});
		contents = (
			<div data-test="guessed-words">
				<h3>Guessed Words</h3>
				<table>
					<thead>
						<tr>
							<th>Guess</th>
							<th>Matching Letter Count</th>
						</tr>
					</thead>
					<tbody>{guessedWordRow}</tbody>
				</table>
			</div>
		);
	}
	return <div data-test="component-guessed-words">{contents}</div>;
}

GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default GuessedWords;
