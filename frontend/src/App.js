import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import index from "./components/index.component";
import AddUser from "./components/add-user.component";
import AddProject from "./components/add-project.component";
import AddTicket from "./components/add-ticket.component";

function App() {
 return (
  <Router>
   <div className="container">
   <Navbar />
    <br/>
    <Route path="/" component={index} />
    <Route path="/add-user" component={AddUser} />
    <Route path="/add-project" component={AddProject} />
    <Route path="/add-ticket" component={AddTicket} />
   </div>
   </Router>
 );
}
 
export default App;