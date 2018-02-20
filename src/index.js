import createBrowserHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { ApolloProvider } from 'react-apollo';

import registerServiceWorker from './registerServiceWorker';
import App from './containers/App/App';
import apolloClient from './services/apollo';
import configureStore from './store/configureStore';
import { getMe } from './store/user/action';
import './assets/stylesheets/index.css';

const history = createBrowserHistory();
const store = configureStore(history);
const client = apolloClient;

if (sessionStorage.getItem('jwt')) {
  store.dispatch(getMe());
}

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </ApolloProvider>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

// In development, hot module replacement (HMR) updates the application
// when changes are made, without having to refresh.
if (module.hot) {
  module.hot.accept('./containers/App/App', () => {
    const NextApp = require('./containers/App/App').default;
    render(NextApp);
  });
}

registerServiceWorker();
