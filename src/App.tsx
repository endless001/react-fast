import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import SignIn from './views/user/SignIn'
import SignUp from './views/user/SignUp'
import Home from './views/home/Home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/user/sigin">
          <SignIn />
        </Route>
        <Route path="/user/sigup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App