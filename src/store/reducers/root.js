import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { tasksReducer } from "./tasks";

export const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer
});
