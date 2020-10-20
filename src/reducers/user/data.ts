import { createReducer } from '../../utils';
import { userConstants } from '../../constants/user';


const initialState = {
    data: null,
    isFetching: false
};

export default createReducer(initialState, {
    [userConstants.RECEIVE_PROTECTED_DATA]: (state:any, payload:any) => {
        return Object.assign({}, state, {
            'data': payload.data,
            'isFetching': false
        });
    },
    [userConstants.FETCH_PROTECTED_DATA_REQUEST]: (state: any, payload: any) => {
        return Object.assign({}, state, {
            'isFetching': true
        });
    }
});