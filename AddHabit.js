import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const AddHabit = () => {
  const [habitName, setHabitName] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim() !== '') {
      // Generate a unique ID for the new habit
      const newHabitId = Math.floor(Math.random() * 1000000) + 1;
      const newHabit = { id: newHabitId, name: habitName, status: 'None' };
      // Save the new habit to the state
      // (You can use a backend or localStorage to persist the data)
      // For simplicity, we'll only keep the data in memory for this example
      setHabitName('');
      history.push('/');
    }
  };

  return (
    <div className="add-habit">
      <h1>Add Habit</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter habit name"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <Link to="/" className="cancel-link">
        Cancel
      </Link>
    </div>
  );
};

export default AddHabit;
