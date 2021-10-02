import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home';

const App: FC = () => {
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
