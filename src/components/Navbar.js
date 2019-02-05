import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/RightMenu/meitar-logo.jpg";

class TopNavbar extends Component {
  render() {
    return (
      <Navbar className="justify-content-end" bg="dark" variant="dark">
        <Navbar.Brand>
          {"  מכון מ.י.ת.ר   "}
          {"   "}
          <img
            src={logo}
            width="50"
            height="50"
            className="App-logo"
            alt="logo"
          />
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default TopNavbar;
