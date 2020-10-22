import { checkHttpStatus, parseJSON } from '../../utils';
import { userConstants } from '../../constants/user';
import jwtDecode from 'jwt-decode';
import { push } from 'react-router-redux'

export function loginUserSuccess(token:string) {
    localStorage.setItem('token', token);
    return {
        type: userConstants.LOGIN_USER_SUCCESS,
        payload: {
            token: token
        }
    }
}


export function loginUserFailure(error: any) {
    localStorage.removeItem('token');
    return {
        type: userConstants.LOGIN_USER_FAILURE,
        payload: {
            status: "11",
            statusText: "11"
        }
    }
}


export function loginUserRequest() {
    return {
        type: userConstants.LOGIN_USER_REQUEST
    }
}

export function logout() {
    localStorage.removeItem('token');
    return {
        type: userConstants.LOGOUT_USER
    }
}


export function logoutAndRedirect() {
    return (dispatch:any, state:any) => {
        dispatch(logout());
        dispatch(push('/login'));
    }
}


export function loginUser(email: string, password :string, redirect = "/") {
    return function (dispatch :any) {
        dispatch(loginUserRequest());
        return fetch('http://localhost:3000/auth/getToken/', {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    let decoded = jwtDecode(response.token);
                    dispatch(loginUserSuccess(response.token));
                    dispatch(push(redirect));
                } catch (e) {
                    dispatch(loginUserFailure({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                }
            })
            .catch(error => {
                dispatch(loginUserFailure(error));
            })
    }
}

export function receiveProtectedData(data:any) {
    return {
        type:  userConstants.RECEIVE_PROTECTED_DATA,
        payload: {
            data: data
        }
    }
}

export function fetchProtectedDataRequest() {
    return {
        type: userConstants.FETCH_PROTECTED_DATA_REQUEST
    }
}

export function fetchProtectedData(token:string) {

    return (dispatch:any, state:any) => {
        dispatch(fetchProtectedDataRequest());
        return fetch('http://localhost:3000/getData/', {
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                dispatch(receiveProtectedData(response.data));
            })
            .catch(error => {
                if (error.response.status === 401) {
                    dispatch(loginUserFailure(error));
                    dispatch(push('/login'));
                }
            })
    }
}
