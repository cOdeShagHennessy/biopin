import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Text from './components/Text';
import HomePage from './containers/HomePage';
import Contact from './components/Contact';
import CounterPage from './containers/CounterPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="counter" component={CounterPage} />
    <Route path="contact" component={Contact} />
  </Route>
);
