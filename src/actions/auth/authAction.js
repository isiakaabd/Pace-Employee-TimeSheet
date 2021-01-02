import AuthService from "../../services/auth.service";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "../types";


const register = (workSpaceName, workSpaceEmail, password) => (dispatch) => {

    return AuthService.register(workSpaceName, workSpaceEmail, password)
        .then((response) => {
            console.log(response)
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve(); 
        },
        (error) => {
            const message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};


const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password)
        .then((data) => { // return jwt
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
        const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();

        dispatch({
            type: LOGIN_FAIL,
        });

        dispatch({
            type: SET_MESSAGE,
            payload: message,
        });

        return Promise.reject();
        }
    );
};

const logout = () => (dispatch) => {
  console.log('hrereh');

AuthService.logout();

dispatch({
    type: LOGOUT,
});
};


export{
    register,
    login,
    logout
}