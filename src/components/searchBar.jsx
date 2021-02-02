import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleAddHabit = this.handleAddHabit.bind(this)
  }

  state = {
    title:""
  }
  
  handleChange(e){
    this.setState({
      title: e.target.value
    })
  }

  handleAddHabit(){
    this.props.onAdd(this.state.title)
  }

  render() {
    return (
      <div className="searchbar">
        <input 
          type="text" 
          className="searchbar-input"
          placeholder="Habit"
          onChange={this.handleChange}/>
        <button 
          className="searchbar-add" 
          onClick={this.handleAddHabit}>Add</button>
      </div>
    );
  }
}

export default SearchBar;