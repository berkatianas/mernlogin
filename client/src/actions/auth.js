import { LOGIN_FAIL, LOGIN_SUCESS } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg)));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};
