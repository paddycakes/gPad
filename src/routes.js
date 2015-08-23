var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/App')}>
      <DefaultRoute handler={require('./components/pages/Home')} />
      <Route name="users" handler={require('./components/pages/User')} />
      <Route name="about" handler={require('./components/pages/About')} />
      <NotFoundRoute handler={require('./components/pages/NotFound')} />
      <Redirect from="about*" to="about" />
    </Route>
);

module.exports = routes;