import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import AddTransaction from './components/AddTransaction';
import Main from './components/Main';
import TransactionDetail from './components/TransactionDetail';
import { StateProvider } from './context/StateProvider';

function App() {
  return (
    <StateProvider>
      <Router>
        <Switch>
          <Route path="/transaction" component={TransactionDetail}>
          </Route>
          <Route path="/add" component={AddTransaction}>
          </Route>
          <Route exact path="/" component={Main}>
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
