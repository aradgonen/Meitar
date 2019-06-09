import React, { Component } from "react";
import logoHomePage from "../Images/RightMenu/meitar-logo.jpg";
import logoAbout from "../Images/MainMenu/about.jpg";
import therapyFields from "../Images/MainMenu/therapyFields.png";
import inspection from "../Images/MainMenu/inspection.png";
import dictionary from "../Images/MainMenu/dictionary.png";
import homePage from "../Images/MainMenu/HomePage.png";
import contact from "../Images/MainMenu/contact.png";

class Navigation extends Component {
  handleClick(destination){
    
  }
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
          <a className="dropdown-item text-right" href='/'>
              דף הבית
              <img
                src={homePage}
                width="75"
                height="75"
                className="App-logo"
                alt="logo"
              />
            </a>
            <a className="dropdown-item text-right" href='/about'>
              אודות
              <img
                src={logoAbout}
                width="75"
                height="75"
                className="App-logo"
                alt="logo"
              />
            </a>
            <a className="dropdown-item text-right" href='/fields'>
              תחומי טיפול
              <img
                src={therapyFields}
                width="75"
                height="75"
                className="App-logo"
                alt="logo"
              />
            </a>
            <a className="dropdown-item text-right" href='inspect'>
              אבחונים
              <img
                src={inspection}
                width="75"
                height="75"
                className="App-logo"
                alt="logo"
              />
            </a>
            <a className="dropdown-item text-right" href='/glossary'>
              מילון מונחים
              <img
                src={dictionary}
                width="75"
                height="75"
                className="App-logo"
                alt="logo"
              />
            </a>

            <a className="dropdown-item text-right" href='/contact'>
              צור קשר
              <img
                src={contact}
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
