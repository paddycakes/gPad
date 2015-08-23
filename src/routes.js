var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/App')}>
      <DefaultRoute handler={require('./components/pages/Home')} />
      <Route name="users" handler={require('./components/pages/User')} />
      <Route name="about" handler={require('./components/pages/About')} />
      <NotFoundRoute handler={require('./components/pages/NotFound')} />
    </Route>
);

module.exports = routes;