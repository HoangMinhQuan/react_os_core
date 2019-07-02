import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import Layout from "./components/Common/Layout";

// React router dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Retry component
const retry = (fn, retriesLeft = 1, interval = 1000) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft < 1) {
            reject("Loading chuck failure!")
          }
          retry(fn, retriesLeft - 1, interval)
        }, interval)
      })
  })
}
// Lazy load component
const TodoComponent = lazy(() => retry(() => import('./components/Todo')))

const TableComponent = lazy(() => retry(() => import('./components/Table')))
const Login = lazy(() => retry(() => import('./components/Login')))

// Store
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <Provider store={reduxStore}>
      <Layout>
        <Suspense fallback={<h4>...Loading</h4>}>
          <Switch>
            <Route exact path="/" component={() => <h1>Dashboard</h1>} />
            <Route path="/todo" component={TodoComponent} />
            <Route path="/table" component={TableComponent} />
            <Route path="/login" component={Login} />
          </Switch>
        </Suspense>
      </Layout>
    </Provider>
  );
}

export default () => (
  <Router>
    <App />
  </Router>
);
