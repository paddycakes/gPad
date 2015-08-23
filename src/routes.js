var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var Route = Router.Route;
var App = require('./components/App');
var HomePage = require('./components/pages/Home');
var UserPage = require('./components/pages/User');
var AboutPage = require('./components/pages/About');
var NotFoundPage = require('./components/pages/NotFound');

var routes = (
    <Route name="app" path="/" handler={App}>
      <DefaultRoute handler={HomePage} />
      <Route name="users" handler={UserPage} />
      <Route name="about" handler={AboutPage} />
      <NotFoundRoute handler={NotFoundPage} />
      <Redirect from="about*" to="about" />
    </Route>
);

module.exports = routes;