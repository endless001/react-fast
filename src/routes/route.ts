import BasicLayout from '../layouts/BasicLayout'
import UserLayout from '../layouts/UserLayout'
import { lazy } from "react";

const routes = [

  {
    path: "/user",
    component: UserLayout,
    children: [
      {
        path: "/user/signin",
        component: lazy(() => import("../views/user/SignIn")),
      },
      {
        path: "/user/signup",
        component: lazy(() => import("../views/user/SignUp")),
      }
    ],
  },
  {
    path: "/",
    component: BasicLayout,
    children: [
      {
        path: "/1",
        component: lazy(() => import("../views/user/SignUp")),
      }
    ],
  },

];
export default routes
