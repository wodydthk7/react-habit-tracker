import React, {Component} from 'react'
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import SearchBar from './components/searchBar';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleAddHabit = this.handleAddHabit.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  state = {
    habits : [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'coding', count: 0},
      {id: 3, name: 'running', count: 0}
    ]
  }

  handleAddHabit(title){
    var habits = [...this.state.habits]
    habits.push({
      id: Date.now(), name: title, count: 0
    })

    this.setState({
      habits: habits
    })
    console.log(this.state.habits)
  }
  
  
  handleIncrement (habit) {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return {...habit, count : habit.count + 1}
      } 
      return item
    })

    this.setState({
      habits: habits
    })
  }

  handleDecrement (habit) {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1
        return { ...habit, count : count < 0 ? 0 : count}
      }
      return item
    })

    this.setState({
      habits: habits
    })
  }

  handleDelete (habit) {
    const habits = this.state.habits.filter(item => item !== habit)

    this.setState({
      habits: habits
    })
  }

  handleReset() {
    const habits = this.state.habits.map(item => {
      if (item.count > 0) {
        return {...item, count : 0}
      }
      return item
    })

    this.setState({
      habits: habits
    })
  }

  render(){
    var count = 0
    this.state.habits.map(habit => 
      count += habit.count
    );

      return (
        <div className="App">
          <Navbar count={count}/>
          <SearchBar
            onAdd={this.handleAddHabit}/>
          <Habits 
            habits={this.state.habits}
            onIncrease={this.handleIncrement}
            onDecrease={this.handleDecrement}
            onDelete={this.handleDelete}/>
          <button 
            className="reset-btn"
            onClick={this.handleReset}>Reset all</button>
        </div>
    );
  }
}

export default App;
