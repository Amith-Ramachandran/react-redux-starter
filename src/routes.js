import React from 'react';
import { Router } from 'react-router';
import AppContainer from './components/AppContainer';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import NoMatchComponent from './components/NoMatchComponent';

const routes = {
  path: '/',
  component: AppContainer,
  indexRoute: {
    name: 'index',
    component: HomeComponent
  },
  childRoutes: [
    {
      path: '/about',
      component: AboutComponent
    },
    {
      path: '*',
      component: NoMatchComponent
    }
  ]
};

class RouterContainer extends React.Component {
  render() {
    return (
       <Router history={this.props.history} routes={routes}/>
    );
  }
}

RouterContainer.propTypes = {
  history: React.PropTypes.object.isRequired
};

export default RouterContainer;
