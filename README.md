# bug-tracker


** Work in progress **

This projects uses the Model-View-Controller (MVC) architecture to log and view users.

Models:
- Project/User/Ticket models in Backend (Mongoose/Node.js)


Views:
- React Components (index, add-project/ticket/user forms)

Controller:
- Express (HTTP Requests (GET/POST)) in controller\admin.js
- Routed through in routes\admin.js


Stack:

- MongoDB
- Express
- ReactJS
- NodeJS

[Guide Used](https://dev.to/andrewbaisden/creating-mern-stack-applications-2020-4a44)
[Secondary Guide used (exercise tracker)](https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1)


## Steps to Run (develop)
- <code>cd backend</code>
- <code>npm run servers</code>

## Goal

- Create a full fledged web app to create and monitor bugs for specific projects 
- User Authentication/Authorization


## Finished Tasks
- Created Schema for the following: User, Tickets, Projects
