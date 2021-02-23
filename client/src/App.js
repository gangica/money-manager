import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Add from './components/Add';
import Main from './components/Main';
import TransactionDetail from './components/TransactionDetail';
import Update from './components/Update';
import { StateProvider } from './context/StateProvider';

function App() {
  return (
    <StateProvider>
      <Router>
        <Switch>
          <Route path="/transaction" component={TransactionDetail} />
          <Route path="/add" component={Add} />
          <Route path="/update" component={Update} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
