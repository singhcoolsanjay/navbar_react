import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Profile from './Profile';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
  <Router> 
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Profile" exact component={Profile}/>
     
      </Switch>
    </div>
  </Router>   
  );
}

const Main = () => (
  <div>
    <h1> Main Page </h1>
  </div>

)

export default App;
