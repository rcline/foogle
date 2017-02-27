/* global window */
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppRoutes from './routes';
import { app } from './store/actions';
import store from './store';

// TODO(rcline): better build process would make this cleaner
// Include assets in build
import './index.css';
import '../node_modules/material-components-web/dist/material-components-web.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';

import '../node_modules/dexie/dist/dexie';

// Uncomment to start from scratch data
//store.dispatch(app.clearAllData());
// Uncomment to load fixture data
//store.dispatch(app.loadFixtureData());
store.dispatch(app.loadApp());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

export default App;
