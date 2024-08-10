import { createStore } from "redux";
import kanbanReducer from "./reducers";

const store = createStore(kanbanReducer);

export default store;
