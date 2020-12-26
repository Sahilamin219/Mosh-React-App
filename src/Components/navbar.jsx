import React, { Component } from "react";
// distructing arguments ... as we don't want to repeat props.
// every time we can use object disructering to disruct the props.
// argument
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill.badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
// class NavBar extends Component {
// render() {
// }
// }
export default NavBar;
// incase where there no state handler present we can
// convert the class into a Stateless Functional Component
