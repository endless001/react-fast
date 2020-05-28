import React, { Suspense } from "react";
import router from "./routes/route";
import RenderRoutes from "./utils/renderRoutes";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <RenderRoutes children={router}></RenderRoutes>
      </Suspense>
    </BrowserRouter>
  )
}


export default App