import React, { memo } from 'react';

const SearchBar = memo((props) => {

  const inputRef = React.useRef()
  const formRef = React.useRef()

  const handleAddHabit = (e) => {
    e.preventDefault()
    const title = inputRef.current.value
    title && props.onAdd(title)
    formRef.current.reset()
  }

  return (
    <form 
      className="searchbar" 
      ref={formRef}
      onSubmit={handleAddHabit}>
      <input 
        className="searchbar-input"
        ref={inputRef}
        type="text" 
        placeholder="Habit"/>
      <button 
        className="searchbar-add">Add</button>
    </form>
  );
})

export default SearchBar;