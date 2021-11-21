import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../constants";

const initialState = [];
export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return state.concat(action.payload);
    case DELETE_TASK:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];
    case EDIT_TASK:
      return {};
    default:
      return state;
  }
};
