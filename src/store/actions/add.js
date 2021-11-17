import { ADD_TASK } from "../constants";

export const addAction = (payload) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_TASK,
      payload: {
        id: Math.floor(Math.random() * 50),
        ...payload
      }
    });
  };
};
