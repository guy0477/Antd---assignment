import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import App from './App';
import AppLaout from './AppLaout';


class Routes extends React.Component {
  render() {
    return (
      <Router>
				
        <Switch>
          <Route exact path="/" component={App} />
					
          <Route exact path="/main" component={AppLaout} />
        </Switch>
				
      </Router>
    )
  }
}

export default Routes;