import React, { Suspense } from "react";
import route from "./routes/route";
import RenderRoutes from "./routes/renderRoutes";
import { BrowserRouter } from "react-router-dom";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);
    
const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Suspense fallback={<div className={classes.root}> <LinearProgress /></div>}>
        <RenderRoutes children={route}></RenderRoutes>
      </Suspense>
    </BrowserRouter>
  )
}


export default App