import axios from "axios"

export const BASE_URL = "https://anik-social-app.onrender.com";

export const loginCall = async(userCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try {
        const res = await axios.post("auth/login", userCredentials);
        dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    } catch(err) {
        dispatch({type:"LOGIN_FAILURE", payload: err});
    }
};