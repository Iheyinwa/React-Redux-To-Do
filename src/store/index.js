import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/root";
import thunk from "redux-thunk";
import { STORAGE } from "./constants";

const store = () => {
  let initialState = localStorage.getItem(STORAGE);
  if (initialState) {
    initialState = JSON.parse(initialState);
  } else {
    initialState = {};
  }
  console.log(initialState);
  const persistStore = (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem(STORAGE, JSON.stringify(state));
    // console.log(state)
    return result;
  };
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, persistStore)
  );
};
export default store();
