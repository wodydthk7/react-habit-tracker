import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  constructor(props) {
    super(props)


  }
  
  render() {
    return (
      <navbar id="navbar">
        <span className="navbar-logo">
          <i class="fas fa-leaf"></i>
        </span>
        <span className="navbar-title">Habit Tracker</span>
        <span className="navbar-count">{this.props.count}</span>
      </navbar>
    );
  }
}

export default Navbar;