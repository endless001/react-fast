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
        component: lazy(() => import("../views/user/SignUp")),
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
    ],
  },

];
export default routes
