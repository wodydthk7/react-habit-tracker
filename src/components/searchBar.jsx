import React, { PureComponent } from 'react';

class SearchBar extends PureComponent {
  constructor(props) {
    super(props)

    this.handleAddHabit = this.handleAddHabit.bind(this)
  }

  inputRef = React.createRef()
  formRef = React.createRef()

  handleAddHabit(e){
    e.preventDefault()
    const title = this.inputRef.current.value
    title && this.props.onAdd(title)
    this.formRef.current.reset()
  }

  render() {
    return (
      <form 
        className="searchbar" 
        ref={this.formRef}
        onSubmit={this.handleAddHabit}>
        <input 
          className="searchbar-input"
          ref={this.inputRef}
          type="text" 
          placeholder="Habit"/>
        <button 
          className="searchbar-add">Add</button>
      </form>
    );
  }
}

export default SearchBar;