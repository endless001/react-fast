import { UserAuthWrapper } from 'redux-auth-wrapper'
import { push } from 'react-router-redux';

export const authorized = UserAuthWrapper({
    authSelector: state => state.auth,
    predicate: auth => auth.isAuthenticated,
    redirectAction: push,
    wrapperDisplayName: 'UserIsJWTAuthenticated'
})