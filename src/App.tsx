import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home';

const Contact = () => {
  return (<div>
    contact
  </div>)
}

const App: FC = () => {
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
