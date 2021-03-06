import * as React from "react";
import {IRouteProps} from '../routes'
import RenderRoutes from "../routes/renderRoutes";
import { History } from "history";

interface ILayoutProps extends IRouteProps {
  history: History;
}

const Layout = (props: ILayoutProps) => {
  const handleClick = React.useCallback((e) => {
    const { name } = e.target;
    props.history.push(name);
  }, [props.history]);

  return (
    <div>
      <RenderRoutes {...props} />
    </div>
  );
};

export default Layout;
