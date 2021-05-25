import { combineReducers } from "redux";
import user from "./user";
import quizSetup from "./quizSetup";

const allReducer = combineReducers({
  user,
  quizSetup,
});
export default allReducer;
