import { createReducer } from '../../utils';
import { messageConstants } from '../../constants/message';


export default createReducer({}, {
    [messageConstants.SUCCESS]: (state: any, payload: any) => {
        return Object.assign({}, state, {
            'isAuthenticating': true,
            'statusText': null
        });
    },
    [messageConstants.ERROR]: (state: any, payload: any) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': true,
            'token': payload.token,
            'userName': "lq",
            'statusText': 'You have been successfully logged in.'
        });

    },
    [messageConstants.CLEAR]: (state: any, payload: any) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': false,
            'token': null,
            'userName': null,
            'statusText': `Authentication Error: ${payload.status} ${payload.statusText}`
        });
    }
 
});