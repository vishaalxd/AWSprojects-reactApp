import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Project from './components/project';
import Project2 from './components/project2';

import App from './App';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={App} />
        <Route path="/project" component={Project} />
        <Route path="/project2" component={Project2} />

      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
