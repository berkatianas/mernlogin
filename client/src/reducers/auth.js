import { LOGIN_FAIL, LOGIN_SUCESS } from "../actions/types";

const initialState = {
  token: null,
  isAuth: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuth: true
      };
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false
      };
    default:
      return state;
  }
}
