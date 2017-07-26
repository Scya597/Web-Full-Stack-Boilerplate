import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Create from './components/Create';
import ReadAll from './components/ReadAll';
import ReadAndDeleteOne from './components/ReadAndDeleteOne';
import Update from './components/Update';
import './scss/style.scss';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/new" component={Create} />
        <Route path="/edit/:id" component={Update} />
        <Route path="/:id" component={ReadAndDeleteOne} />
        <Route path="/" component={ReadAll} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
