import React from "react";
import GuessedWords from "./GuessedWords";
import Congratulations from "./Congratulations";

function App() {
	return (
		<div className="App">
			<GuessedWords
				guessedWords={[
					{ guessedWord: "train", letterMatchCount: 3 },
					{ guessedWord: "party", letterMatchCount: 1 },
					{ guessedWord: "Stalin", letterMatchCount: 5 },
				]}
			/>
			<Congratulations success={true} />
		</div>
	);
}

export default App;
