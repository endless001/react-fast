import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {IRouteProps} from './index'

const renderRoutes = (props: IRouteProps) => {
  return (
    <Switch>
      {
        props.children &&
        props.children.map((item, index) => {
          if (item.redirect) {
            return (
              <Redirect
                key={index}
                from={item.path}
                to={item.redirect}
              ></Redirect>
            );
          }
          return (
            <Route
              key={index}
              path={item.path}
              render={(props) => {
                return (
                  item.component && (
                    <item.component
                      children={item.children}
                      {...props}
                    ></item.component>
                  )
                );
              }}
            ></Route>
          );
        })
      })y
    </Switch>
  );
};

export default renderRoutes;