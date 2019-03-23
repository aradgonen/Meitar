import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import menuLogo from "../Images/menu.png";
class MainText extends Component {
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
              לחץ? התלבטות? בלבול? דכאון? בדידות? חרדה? זעם? מי לא חווה רגשות
              לא-פשוטים אלה בחיים האישיים או בהקשר של יחסים זוגיים משפחתיים,
              חברתיים או תעסוקתיים?...
            </Card.Title>
            <Card.Text>
              החיים המודרניים מצבים בפני כולנו, ילדים ומבוגרים כאחד, דרישות,
              דילמות וקונפליקטים העלולים, לא אחת, להביא את האדם ו/או המשפחה
              למצבי לחץ, תסכול וחוסר-אונים בבואם להתמודד עם המורכבות של
              סיטואציות קיומיות יום-יומית. במהלך החיים, רובנו מתנסים בצמתים
              התפתחותיים המצריכים עצירה, התבוננות ייעוץ ולווי על-מנת להתגבר על
              מכשול קושי או משבר, לאתר את הכרות האנושים הטמונים בנו ולהמשיך
              בחיינו מחוזקים ומודעים יותר.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MainText;
