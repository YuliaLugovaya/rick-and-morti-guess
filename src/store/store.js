import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from './reducers/mainReducer'
import { rightAnswersReducer } from './reducers/mainReducer'
import { falseAnswersReducer } from './reducers/mainReducer'
import { saveState } from "./localStorage";
import { loadState } from "./localStorage";

const reducer = combineReducers({
  mainStore: mainReducer,
  rightAnswersStore: rightAnswersReducer,
  falseAnswersStore: falseAnswersReducer,
});

const store = configureStore({
  reducer: reducer,
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;