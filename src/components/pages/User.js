var React = require('react');
var UsersApi = require('../../api/github/Users');

var Users = React.createClass({
  getInitialState: function() {
    return {
      users: []
    };
  },

  componentWillMount: function() {
    this.setState( { users: UsersApi.getAll() });
  },

  render: function () {
    var createUserRow = function(user) {
      return (
          <tr key={user.id}>
            <td><a href={ "/#users/" + user.username}>{user.username}</a></td>
            <td>{user.firstName} {user.lastName}</td>
          </tr>
      );
    };

    return (
        <div>
          <h1>Github Users</h1>

          <table className="table">
            <thead>
              <th>Username</th>
              <th>Full Name</th>
            </thead>
            <tbody>
            { this.state.users.map(createUserRow, this)}
            </tbody>
          </table>
        </div>
    );
  }
});

module.exports = Users;