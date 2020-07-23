import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import Product from './routes/Product/IndexPage';
import User from './routes/User/User';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/product"  component={Product} />
        <Route path="/user"  component={User} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
