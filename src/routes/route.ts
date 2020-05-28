import BasicLayout from '../layouts/BasicLayout'
import UserLayout from '../layouts/UserLayout'
import { lazy } from "react";

const routes = [
  {
    path: "/basic",
    component: BasicLayout,
    children: [
    ],
  },
  {
    path: "/user",
    component: BasicLayout,
    children: [
      {
        path: "/user/page1",
        component: lazy(() => import("../views/user/SignIn")),
      },
      {
        path: "/user/page2",
        component: lazy(() => import("../views/user/SignIn")),
      },
      {
        path: "/user/page3",
        component: lazy(() => import("../views/user/SignIn")),
      },
      { path: "/basic", redirect: "/basic/page1" },
    ],
  },
  {
    path: "/",
    redirect: "/basic",
  },
];
export default routes
