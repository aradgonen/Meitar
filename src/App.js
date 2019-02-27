import React, { Component } from "react";
import "./App.css";
import Maintext from "./components/Maintext";
import Navigation from "./components/Navigation";
import Sidebar from "react-sidebar";

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: true,
      pullRight: true
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
  render() {
    return (
      <div className="App">
        {/* <TopNavbar /> */}
        <Sidebar
          sidebar={<Navigation />}
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          pullRight={this.state.pullRight}
        >
          <Maintext />
        </Sidebar>
      </div>
    );
  }
}

export default App;
