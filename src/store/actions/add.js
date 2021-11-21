import { ADD_TASK } from "../constants";

export const addAction = (payload) => (dispatch) => {
  dispatch({
    type: ADD_TASK,
    payload: {
      id: Math.floor(Math.random() * 50),
      ...payload
    }
  });
};
