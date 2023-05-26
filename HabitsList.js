import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCheckCircle, BsXCircle, BsCircle } from 'react-icons/bs';

const HabitsList = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading a book', status: 'None' },
    { id: 2, name: 'Going to the gym', status: 'None' },
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        return { ...habit, status: newStatus };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  return (
    <div className="habits-list">
      <h1>Habit Tracker</h1>
      <Link to="/add" className="add-habit-button">
        Add Habit
      </Link>
      {habits.map((habit) => (
        <div className="habit" key={habit.id}>
          <div className="habit-info">
            <span className="habit-name">{habit.name}</span>
            <div className="habit-status">
              <button
                className={`status-btn ${
                  habit.status === 'Done' ? 'done' : ''
                }`}
                onClick={() => handleStatusChange(habit.id, 'Done')}
              >
                <BsCheckCircle />
              </button>
              <button
                className={`status-btn ${
                  habit.status === 'Not done' ? 'not-done' : ''
                }`}
                onClick={() => handleStatusChange(habit.id, 'Not done')}
              >
                <BsXCircle />
              </button>
              <button
                className={`status-btn ${
                  habit.status === 'None' ? 'none' : ''
                }`}
                onClick={() => handleStatusChange(habit.id, 'None')}
              >
                <BsCircle />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitsList;
