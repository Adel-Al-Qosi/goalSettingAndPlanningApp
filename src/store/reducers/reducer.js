import { combineReducers } from "redux";
import ideasReducer from "./ideas";

const rootReducer = combineReducers({
  ideas: ideasReducer,
});

export default rootReducer;