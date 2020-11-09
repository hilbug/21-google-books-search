import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import Jumbo from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Jumbo />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/savedbooks">
            <Saved />
          </Route>
        </Switch>
      </>
    </Router>

    // <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>Welcome to React</h2>
    //   </div>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div>
  );
}


export default App;
