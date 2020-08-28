import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './main/NavBar';
import Home from './pages/Home';
import Settings from './pages/Settings';

function Router() {

  return (
    <HashRouter>
      <NavBar />
      <div className="router">
        <Switch>
          <Redirect exact from="/" to={`/home`} />
          <Route exact path={`/home`} component={Home} />
          <Route exact path={`/settings`} component={Settings} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default Router;
