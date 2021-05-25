import { combineReducers } from "redux";
import userReducer from "./user";
import categoryReducer from "./category";

const allReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
});
export default allReducer;
