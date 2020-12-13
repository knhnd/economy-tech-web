import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} exact />
      </Switch>
    </Router>
  </>
  );
}

export default App;