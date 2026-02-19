import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import AutoFix from './pages/AutoFix';
import Runs from './pages/Runs';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/autofix' component={AutoFix} />
        <Route path='/runs' component={Runs} />
      </Switch>
    </Router>
  );
};

export default App;