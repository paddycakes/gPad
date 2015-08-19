$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/pages/Home');
var Users = require('./components/pages/User');
var About = require('./components/pages/About');
var Header = require('./components/common/Header');

var App = React.createClass({
  render: function () {
    var Child;
    switch (this.props.route) {
      case 'about': Child = About; break;
      case 'users': Child = Users; break;
      default: Child = Home;
    }
    return (
        <div>
          <Header/>
          <Child/>
        </div>
    );
  }
});

function render() {
  var route = window.location.hash.substr(1);
  React.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
