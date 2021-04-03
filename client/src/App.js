import React from 'react';
import Dashboard from './components/DashboardComponent/DashboardComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route path='/book'>{/* <About /> */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
