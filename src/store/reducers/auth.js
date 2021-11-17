import { LOGIN, LOGOUT, USER_DETAILS } from "../constants";

const initialState = { login: false, userDetails: null };
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, login: action.payload };
    case USER_DETAILS:
      return { ...state, userDetails: action.payload };
    case LOGOUT:
      return { login: false, userDetails: null };
    default:
      return state;
  }
};
