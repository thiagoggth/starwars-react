import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Home from './pages/Home';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;