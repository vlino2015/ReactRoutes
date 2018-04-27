import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Topics from './components/Topics'
import NotFound from './components/NotFound'
import {Navbar, Nav, NavItem} from 'react-bootstrap'



class App2 extends Component {
  render() {
    return (
      <Router>
       
    <div>
    <Navbar>
        <Nav>
           <NavItem><Link to="/">Home</Link></NavItem>

           <NavItem><Link to="/about">About</Link></NavItem>

           <NavItem><Link to="/topics">Topics</Link></NavItem>
       </Nav>
       </Navbar>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/topics" component={Topics} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
  </Router>
    );
  }
}

export default App2;