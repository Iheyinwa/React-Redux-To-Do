import { DELETE_TASK } from "../constants";

export const deleteAction = (index) => (dispatch) => {
  dispatch({
    type: DELETE_TASK,
    index
  });
};
