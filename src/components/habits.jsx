import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  constructor(props){
    super(props)

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  state = {
    habits : this.props.habits
  }

  componentDidUpdate(prevProps) {
    if (this.props.habits !== prevProps.habits) {
      this.setState({
        habits: this.props.habits
      })
    }
  }

  handleIncrement (habit) {
    this.props.onIncrease(habit)
  }

  handleDecrement (habit) {
    this.props.onDecrease(habit)
  }

  handleDelete (habit) {
    this.props.onDelete(habit)
  }

  render() {
    return (
      <ul>
        {
          this.state.habits.map(habit => 
            <Habit 
              key={habit.id} 
              habit={habit}
              onIncrease={this.handleIncrement}
              onDecrease={this.handleDecrement}
              onDelete={this.handleDelete}/>
          )
        }
      </ul>
    );
  }
}

export default Habits;