import Home from '../views/home/Home'
import SignIn from '../views/user/SignIn'
import SignUp from '../views/user/SignUp'


 const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    routes: [
      {
        path: "/1",
        component: '<div>1</div>'
      },
      {
        path: "/2",
        component: '<div>2</div>'
      }
    ]
  },
  {
    path: "/user/sigin",
    component: SignIn,
    exact: true
  },
  {
    path: "/user/sigup",
    component: SignUp,
    exact: true
  },
  {
    path: '*',
    exact: true,
    component: '<div>404</div>',
    name: '404',
    title: '404'
  }
]
export default routes
