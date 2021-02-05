import React, { PureComponent } from 'react';
import Habit from './habit';

class Habits extends PureComponent {
  constructor(props){
    super(props)

  
  }

  componentDidUpdate(prevProps) {
    if (this.props.habits !== prevProps.habits) {
      this.setState({
        habits: this.props.habits
      })
    }
  }

  render() {
    return (
      <ul>
        {
          this.props.habits.map(habit => 
            <Habit 
              key={habit.id} 
              habit={habit}
              onIncrease={this.props.onIncrease}
              onDecrease={this.props.onDecrease}
              onDelete={this.props.onDelete}/>
          )
        }
      </ul>
    );
  }
}

export default Habits;