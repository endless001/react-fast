import BasicLayout from '../layouts/BasicLayout'
import UserLayout from '../layouts/UserLayout'
import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: BasicLayout,

    children: [
    ],
  },
  {
    path: "/user",
    component: UserLayout,
    children: [
      {
        path: "/user/SignIn",
        component: lazy(() => import("../views/user/SignIn")),
      },
      {
        path: "/user/SignUp",
        component: lazy(() => import("../views/user/SignUp")),
      }
    ],
  },

];
export default routes
