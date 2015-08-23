var React = require('react');
var UsersApi = require('../../api/github/Users');
var UserList = require('../users/UserList');

var Users = React.createClass({
  getInitialState: function() {
    return {
      users: []
    };
  },

  componentDidMount: function() {
    if (this.isMounted()) {
      this.setState({users: UsersApi.getAll()});
    }
  },

  render: function () {
    return (
        <div>
          <h1>Github Users</h1>
          <UserList users={this.state.users} />
        </div>
    );
  }
});

module.exports = Users;