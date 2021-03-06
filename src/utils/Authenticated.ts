import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'



export const authenticated = connectedRouterRedirect({
    redirectPath: '/user/signin',
    // If selector is true, wrapper will not redirect
    // For example let's check that state contains user data
    authenticatedSelector: state => true,
    // A nice display name for this check
    wrapperDisplayName: 'UserIsAuthenticated'
})

