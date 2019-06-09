import React, { Component } from "react";
import "./App.css";
import Maintext from "./components/Maintext";
import Fields from "./components/Fields";
import Inspection from "./components/Inspections";
import Glossary from "./components/Glossary";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Sidebar from "react-sidebar";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Inspections from "./components/Inspections";
import { withRouter } from 'react-router-dom'
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
    this.setState({ sidebarOpen: open, sidebarDocked: open });
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
          <Router>
          <Route exact path='/' component={()=>{
            return(
              <Maintext
            onSetSidebarOpen={this.onSetSidebarOpen}
            sidebarDocked={this.state.sidebarDocked}
          />
            )
          }}/>
          <Route exact path='/about' component={()=>{
            return(
              <About
            onSetSidebarOpen={this.onSetSidebarOpen}
            sidebarDocked={this.state.sidebarDocked}
          />
            )
          }}/>
                    <Route exact path='/fields' component={()=>{
            return(
              <Fields
            onSetSidebarOpen={this.onSetSidebarOpen}
            sidebarDocked={this.state.sidebarDocked}
          />
            )
          }}/>
                    <Route exact path='/inspect' component={()=>{
            return(
              <Inspections
            onSetSidebarOpen={this.onSetSidebarOpen}
            sidebarDocked={this.state.sidebarDocked}
          />
            )
          }}/>
                    <Route exact path='/glossary' component={()=>{
            return(
              <Glossary
            onSetSidebarOpen={this.onSetSidebarOpen}
            sidebarDocked={this.state.sidebarDocked}
          />
            )
          }}/>
                    <Route exact path='/contact' component={()=>{
            return(
              <Contact
            onSetSidebarOpen={this.onSetSidebarOpen}
            sidebarDocked={this.state.sidebarDocked}
          />
            )
          }}/>

          </Router>
        </Sidebar>
      </div>
    );
  }
}

export default App;
