import { combineReducers } from "redux";
import guessedWords from "./guessedWords";
import success from "./success";
import secretWord from "./secretWord";

export default combineReducers({
	guessedWords,
	success,
	secretWord,
});
