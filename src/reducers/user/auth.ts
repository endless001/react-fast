import { createReducer } from '../../utils';
import { userConstants } from '../../constants/user';
import jwtDecode from 'jwt-decode';


const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
};

export default createReducer(initialState, {

    [userConstants.LOGIN_USER_REQUEST]: (state:any, payload:any) => {
        return Object.assign({}, state, {
            'isAuthenticating': true,
            'statusText': null
        });
    },
    [userConstants.LOGIN_USER_SUCCESS]: (state: any, payload: any) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': true,
            'token': payload.token,
            'userName': 'lq',
            'statusText': 'You have been successfully logged in.'
        });

    },
    [userConstants.LOGIN_USER_FAILURE]: (state: any, payload: any) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': false,
            'token': null,
            'userName': null,
            'statusText': `Authentication Error: ${payload.status} ${payload.statusText}`
        });
    },
    [userConstants.LOGOUT_USER]: (state: any, payload: any) => {
        return Object.assign({}, state, {
            'isAuthenticated': false,
            'token': null,
            'userName': null,
            'statusText': 'You have been successfully logged out.'
        });
    }
});