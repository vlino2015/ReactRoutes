import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Topics from './components/Topics'
import NotFound from './components/NotFound'



class App extends Component {
  render() {
    return (
      <Router>
       
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

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

export default App;