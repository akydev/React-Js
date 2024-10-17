import { createStore } from "redux";
import rootReducer from "../reducer/rootReducer";

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export default store;
