import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import BasicLayout from '../layouts/Basic';
import Home from './Home';
import Forms from './Forms';
import Form from './Form';
import EditForm from './EditForm';
import Responses from './Responses';

/*const createForm = () => {
  // TODO(rcline): redirect to edit with new formId
  //Router.browserHistory.push('/forms');
};*/

class AppRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={BasicLayout}>
          <IndexRoute component={Home}/>
          {/*<Route path="/create" onEnter={createForm} />*/}
          <Route path="/forms" component={Forms}/>
          <Route path="/form/:formId" component={Form}/>
          <Route path="/edit-form/:formId" component={EditForm}/>
          <Route path="/responses" component={Responses}/>
        </Route>
      </Router>
    );
  }
}

export default AppRoutes;
