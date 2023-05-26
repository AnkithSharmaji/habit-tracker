import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HabitsList from './components/HabitsList';
import AddHabit from './components/AddHabit';

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>Habit Tracker</h1>
        <Switch>
          <Route exact path="/" component={HabitsList} />
          <Route path="/add" component={AddHabit} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
