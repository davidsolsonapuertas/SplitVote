import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard/DashboardComponent';
import SuccessfulBookingComponent from './components/SuccessfulBookingComponent/SuccessfulBookingComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route path='/successfulbooking'>
          <SuccessfulBookingComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
