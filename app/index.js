require('../less/main.less');
'use strict';
import React, { Component, PropTypes } from "react";
import { Router } from 'react-router';
import routes from './routes';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// import {addGroup, removeGroup, loadGroups, addTodo, completeTodo, setVisibilityFilter,VisibilityFilters} from './actions/actions'

// import {countUp, countDown} from './actions/counterActions'

import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

function createLogger({ getState }) {
  return (next) =>
    (action) => {
      const console = window.console;
      const prevState = getState();
      const returnValue = next(action);
      const nextState = getState();
      const actionType = String(action.type);
      const message = `action ${actionType}`;
      console.log(`%c prev state`, `color: #FF7E9E`, prevState);
      console.log(`%c action`, `color: #03A9F4`, action);
      console.log(`%c next state`, `color: #5CAF50`, nextState);
      return returnValue;
    };
}
const createStoreWithMiddleware =
  applyMiddleware(createLogger,thunk)(createStore);

function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
history.listen(location=>console.log("location = ", location.pathname));

// class Application extends React.Component {
//   componentDidMount() {
//     // store.dispatch(loadGroups())
//   }
//
//   render() {
//     return (
//
//       <div className="myDiv">
//           <div className="urDiv">
//             <h1>This is longer</h1>
//           </div>
//       </div>
//     )};
//   }

const render = () => {
  ReactDOM.render(
    <div>
    <Provider store={store}>
       <div>
       <Router history={history} routes={routes} />
       </div>
    </Provider>
    </div>,
    document.getElementById("root"));
  };

store.subscribe(render);
render();
