import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HabitsList from './components/HabitsList';
import AddHabit from './components/AddHabit';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HabitsList} />
          <Route path="/add" component={AddHabit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
