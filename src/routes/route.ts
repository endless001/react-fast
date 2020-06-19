import BasicLayout from '../layouts/BasicLayout'
import UserLayout from '../layouts/UserLayout'
import { lazy } from "react";
import {IRouteProps} from '../types/index'

const routes:IRouteProps[] = [
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
        path: "/",
        component: lazy(() => import("../views/user/SignUp")),
      }
    ],
  },
  {
    path: "*",
    component: lazy(() => import("../views/404")),
  },

];
export default routes
