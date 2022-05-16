import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { StateProvider } from './context/StateProvider'

import Add from './components/Add'
import Main from './components/Main'
import Report from './components/Report'
import Type from './components/Type'
import Update from './components/Update'

import './App.css'

function App() {
  return (
    <StateProvider>
      <Router>
        <Switch>
          <Route path="/type" component={Type} />
          <Route path="/add" component={Add} />
          <Route path="/update" component={Update} />
          <Route path="/report" component={Report} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
