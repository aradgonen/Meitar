import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import menuLogo from "../Images/menu.png";
class Contact extends Component {
  render() {
    return (
      <div>
        <Card className="text-center">
          <Card.Header className="text-right">
            {" "}
            <button
              onClick={() =>
                this.props.onSetSidebarOpen(!this.props.sidebarDocked)
              }
            >
              <img src={menuLogo} />
            </button>
            מ.י.ת.ר המכון הישראלי לתראפיות
          </Card.Header>
          <Card.Body>
            <Card.Title>
              צור קשר
            </Card.Title>
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Contact;
