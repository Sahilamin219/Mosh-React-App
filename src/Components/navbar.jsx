import React, { Component } from "react";
// distructing arguments ... as we don't want to repeat props.
// every time we can use object disructering to disruct the props.
// argument
//stateless functional component
const NavBar = ({ totalCounters }) => {
  console.log("Nav-bar rendered");
  // you can not use life cycle hooks in stateless components
  // we can only use class components
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
