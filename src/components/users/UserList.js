var React = require('react');

var UserList = React.createClass({

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
          <table className="table">
            <thead>
              <th>Username</th>
              <th>Full Name</th>
            </thead>
            <tbody>
              { this.props.users.map(createUserRow, this) }
            </tbody>
          </table>
        </div>
    );
  }
});

module.exports = UserList;