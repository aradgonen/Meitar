import React, { Component } from "react";
import "./App.css";
import Maintext from "./components/Maintext";
import TopNavbar from "./components/Navbar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <Maintext />
      </div>
    );
  }
}

export default App;
