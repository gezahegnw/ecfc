import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF, faYoutube);
const FooterPage = () => {
  return (
    <div>
      <Container
        fluid
        style={{
          backgroundColor: "#f5f2f2",
          paddingTop: 20,
          paddingBottom: 20
        }}
      >
        <Row>
          <Col sm>
            <h5 className="title">
              Ethiopian Christian Fellowship Church Kansas
            </h5>
            <p>
              Address: 14345 W 119th Street Olathe, KS 66062
              <br />
              Phone: (913) 254-7450
            </p>
          </Col>
          <Col sm>
            <h4>Church Services</h4>
            <hr />
            <h5>Sunday's First Shift Service</h5>
            Sun(9am - 10:30am) <br />
            <h5>Sunday's Second Shift Service</h5>
            Sun(11am - 12:30pm) <br />
            <h4>Prayer Schedules</h4>
            Mon-Sat (10am - 12pm) Prayer
            <br />
            Fri(8pm - 2am) Overnight Prayer <br />
            <h4>Every Friday's Service</h4>
            Friday(6:00pm - 8pm) <br />
            <h5>High school Youth Bible Study</h5>
            Friday(6:00pm - 8:00pm) <br />
            <h5>College Youth Bible Study</h5>
            Sun(7:00pm -9:00)
          </Col>
          <Col sm>
            <h5 className="title">Follow Us On</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/ecfcks">
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/channel/UCaSWFAwSeTIW4fHFbBV0iiQ">
                  <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />
                </a>
              </li>
              {/* <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          textAlign: "center",
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: "gray"
        }}
      >
        Copyright &copy; January 2020: Ethiopian Christian Fellowship Church
        Kansas
      </div>
    </div>
  );
};

export default FooterPage;
