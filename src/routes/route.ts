import BasicLayout from '../layouts/BasicLayout'
import UserLayout from '../layouts/UserLayout'
import { lazy } from "react";
import {IRouteProps} from './index'

const routes:IRouteProps[] = [
  {
    path: "/user",
    component: UserLayout,
    children: [
      {
        path: "/user/signin",
        component: lazy(() => import("../pages/user/SignIn")),
      },
      {
        path: "/user/signup",
        component: lazy(() => import("../pages/user/SignUp")),
      }
    ],
  },
  {
    path: "/",
    component: BasicLayout,
    children: [
      {
        path: "/",
        component: lazy(() => import("../pages/home/Index")),
      }
    ],
  },
  {
    path: "*",
    component: lazy(() => import("../pages/404")),
  },

];
export default routes
