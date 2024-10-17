import counterReducer from "./counterReducer";
import { combineReducers } from "redux";
import userApiReducer from "./userApiReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userApiReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
