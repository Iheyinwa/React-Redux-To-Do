import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../constants";

const initialState = { taskDetails: null };
export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      let arr = { ...state, taskDetails: action.payload };
      return arr;
    case DELETE_TASK:
      return {};
    case EDIT_TASK:
      return {};
    default:
      return state;
  }
};
