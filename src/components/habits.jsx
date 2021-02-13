import React, { memo } from 'react';
import Habit from './habit'

const Habits = memo((props) => {
  return (
    <ul>
      {
        props.habits.map(habit => 
          <Habit 
            key={habit.id} 
            habit={habit}
            onIncrease={props.onIncrease}
            onDecrease={props.onDecrease}
            onDelete={props.onDelete}/>
        )
      }
    </ul>
  );
});

export default Habits;