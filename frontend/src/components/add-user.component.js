import React, { Component } from 'react';

export default class AddUser extends Component {
  render() {
    return (
      <div>
         <h1>Add User</h1>

    <form method="POST" action="http://localhost:8080/add-user">
    <div>
        <label>Username</label>
        <input type="text" name="username" required />
    </div>
    <div>
        <label>Email</label>
        <input type="text" name="email" required />
    </div>

    <div>
        <label>Role</label>
        <input type="text" name="role" required />
    </div>
    
    <div>
        <button type="submit">Add User</button>
    </div>
    </form>
      </div>
    )
  }
}