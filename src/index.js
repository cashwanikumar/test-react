import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  ConnectedRouter,
  routerMiddleware as router,
} from "connected-react-router/immutable";
import createSagaMiddleware from "redux-saga";

// Import the index reducer and sagas
import IndexReducer from "./utils/IndexReducer";
import IndexSagas from "./utils/IndexSagas";

// Import all of our components
import App from "./containers/AppContainer";
import NoMatch from "./components/NoMatch";

// Import app names

// Other Imports
import * as registerServiceWorker from "./serviceWorker";
import Dashboard from "./components/Dashboard";

// Create browser history
const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routerMiddleware = router(history);

// Build the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware();

/*eslint-disable */
const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

/* eslint-enable */
// Setup Store
const store = createStore(
  IndexReducer(history),
  composeSetup(applyMiddleware(routerMiddleware, sagaMiddleware)) // allows redux devtools to watch sagas
);

// Begin our Index Saga
sagaMiddleware.run(IndexSagas);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route component={NoMatch} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker.register();
