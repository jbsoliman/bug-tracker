import React, { Component } from 'react';

export default class AddTicket extends Component {
  render() {
    return (
      <div>
         <h1>Add Ticket</h1>

<form method="POST" action="/add-ticket">
    <div>
        <label for="priority">Priority :</label>
        <select id="priority" name="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Very High">Very High</option>
        </select>
    </div>
    <div>
        <label>Project Name</label>
        <input type="text" name="projectname" required />
    </div>
    <div>
        <label>Description</label>
        <input type="text" name="description" required />

    </div>
    <div>
        <label for="type">type: </label>
        <select id="type" name="type">
            <option value="Feature Requests">Feature Requests</option>
            <option value="Bugs or Errors">Bugs or Errors</option>
            <option value="Inquiry">Inquiry</option>
            <option value="Scheduled Item">Scheduled Item</option>
        </select>

    </div>
    <div>
        <label>Creator</label>
        <input type="text" name="creator" required />

    </div>
    
    <div>
        <label>Assigned Developer</label>
        <input type="text" name="assigneddeveloper" required />

    </div>
    <div>
        <label for="status">Status: </label>
        <select id="status" name="status">
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
        </select>

    </div>
    

    <div>
        <button type="submit">Add Ticket</button>
    </div>
</form>


      </div>
    )
  }
}