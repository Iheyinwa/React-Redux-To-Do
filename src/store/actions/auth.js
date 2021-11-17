import { LOGIN, USER_DETAILS } from "../constants";

// export const authAction = async (payload) => {
//   setTimeout(() => {
//     return {
//       type: LOGIN,
//       payload
//     };
//   }, 3000);
// };
export const authAction = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({ type: LOGIN, payload: true });
        dispatch({
          type: USER_DETAILS,
          payload: {
            name: "augustine",
            phoneNumber: "+2349014785236",
            ...payload
          }
        });
        return resolve("Login Success");
      }, 1000);
    });
  };
};
