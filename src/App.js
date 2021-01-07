import React, { Component } from 'react';  //imports
//import logo from './logo.svg';
import './App.css';
import { Content } from './components/content';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CreateProfile} from './components/createProfile';
import { EditProfile } from './components/editProfile';
import ViewProfiles  from './components/viewProfiles';
import {Goals} from './components/goals';

class App extends Component {
  render() {
    return (
      <Router>
        

        <div className="App">

          <Navbar bg="dark" variant="dark">  
            <Navbar.Brand href="/">BODYCHECK™</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/createProfile">Add New Bod</Nav.Link>              
              <Nav.Link href="/editProfile">Edit Profiles</Nav.Link>
              <Nav.Link href="/viewProfile">View Profiles</Nav.Link>
              
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/createProfile' component={CreateProfile} exact />
            <Route path='/editProfile' component={EditProfile} exact />
            <Route path='/viewProfile' component={ViewProfiles} exact />
            <Route path='/goals/:id' component={Goals} exact/>
          </Switch>


        </div>
      </Router>
    );
  }
}

export default App;
