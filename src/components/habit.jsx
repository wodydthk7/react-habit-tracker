import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  constructor(props){
    super(props)

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleIncrement () {
    this.props.onIncrease(this.props.habit)
  }

  handleDecrement () {
    this.props.onDecrease(this.props.habit)
  }

  handleDelete () {
    this.props.onDelete(this.props.habit)
  }

  render() {
    const {name, count} = this.props.habit
    
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count" >{count}</span>
        <button 
          className="habit-button habit-increase-btn"
          onClick={this.handleIncrement}>
          <i class="fas fa-plus-square"></i>
        </button>
        <button 
          className="habit-button habit-decrease-btn"
          onClick={this.handleDecrement}>
          <i class="fas fa-minus-square"></i>
        </button>
        <button 
          className="habit-button habit-trash-btn"
          onClick={this.handleDelete}>
          <i class="fas fa-trash"></i>
        </button>

      </li>
    );
  }
}
export default Habit;
