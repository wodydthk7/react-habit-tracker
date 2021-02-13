import React, { memo } from 'react';

const Habit = memo((props) => {
  const handleIncrement = () => {
    props.onIncrease(props.habit)
  }

  const handleDecrement = () => {
    props.onDecrease(props.habit)
  }

  const handleDelete = () => {
    props.onDelete(props.habit)
  }

  const {name, count} = props.habit
    
  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count" >{count}</span>
      <button 
        className="habit-button habit-increase-btn"
        onClick={handleIncrement}>
        <i class="fas fa-plus-square"></i>
      </button>
      <button 
        className="habit-button habit-decrease-btn"
        onClick={handleDecrement}>
        <i class="fas fa-minus-square"></i>
      </button>
      <button 
        className="habit-button habit-trash-btn"
        onClick={handleDelete}>
        <i class="fas fa-trash"></i>
      </button>

    </li>
  );
});

export default Habit;