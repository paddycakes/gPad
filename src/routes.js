var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/App')}>
      <DefaultRoute handler={require('./components/pages/Home')} />
      <Route name="users" handler={require('./components/pages/User')} />
      <Route name="about" handler={require('./components/pages/About')} />
    </Route>
);

module.exports = routes;