import React, { memo, useCallback, useState } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import SearchBar from './components/searchBar';

const App = memo(() => {
  const [habits, setHabits] = useState([
    {id: 1, name: 'Reading', count: 0},
    {id: 2, name: 'coding', count: 0},
    {id: 3, name: 'running', count: 0}
  ])

  
  const handleAddHabit = useCallback((title) => {
    var habitList = [...habits]
    habitList.push({
      id: Date.now(), name: title, count: 0
    })

    setHabits(habitList)
  })
  
  
  const handleIncrement = useCallback((habit) => {
    const habitList = habits.map(item => {
      if (item.id === habit.id) {
        return {...habit, count : habit.count + 1}
      } 

      return item
    })

    setHabits(habitList)
  })

  const handleDecrement = useCallback((habit) => {
    const habitList = habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1
        return { ...habit, count : count < 0 ? 0 : count}
      }

      return item
    })

    setHabits(habitList)
  })

  const handleDelete = useCallback((habit) => {
    const habitList = habits.filter(item => item !== habit)

    setHabits(habitList)
  })

  const handleReset = useCallback(() => {
    const habitList = habits.map(item => {
      if (item.count > 0) {
        return {...item, count : 0}
      }

      return item
    })

    setHabits(habitList)
  })

  var count = 0
  habits.map(habit => 
    count += habit.count
  );

  return (
    <div className="App">
      <Navbar count={count}/>
      <SearchBar
        onAdd={handleAddHabit}/>
      <Habits 
        habits={habits}
        onIncrease={handleIncrement}
        onDecrease={handleDecrement}
        onDelete={handleDelete}/>
      <button 
        className="reset-btn"
        onClick={handleReset}>Reset all</button>
    </div>
  );
});

export default App;