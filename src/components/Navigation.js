import React, { Component } from "react";
import logoHomePage from "../Images/RightMenu/meitar-logo.jpg";
import logoAbout from "../Images/MainMenu/about.jpg";

class Navigation extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <img
              src={logoHomePage}
              width="250"
              height="150"
              className="App-logo"
              alt="logo"
            />
          </tr>
          <tr>
            <a className="dropdown-item text-right">
              אודות
              <img
                src={logoAbout}
                width="75"
                height="75"
                className="App-logo"
                alt="logo"
              />
            </a>
          </tr>
        </table>
      </div>
    );
  }
}

export default Navigation;
