import React, {memo} from 'react';

const Navbar = memo((props) => {
  return (
    <navbar id="navbar">
      <span className="navbar-logo">
        <i class="fas fa-leaf"></i>
      </span>
      <span className="navbar-title">Habit Tracker</span>
      <span className="navbar-count">{props.count}</span>
    </navbar>
  );

});

export default Navbar;