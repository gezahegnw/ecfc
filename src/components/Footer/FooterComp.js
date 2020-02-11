import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF)
const FooterPage = () => {
  return (
    <div className="container-fluid">
      <MDBFooter color="special-color" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">
                Ethiopian Christian Fellowship Church Kansas
              </h5>
              <p>
                Address: 14345 W 119th Street Olathe, KS 66062
                <br />
                Phone: (913) 254-7450
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Follow Us On</h5>
              <ul>
                <li className="list-unstyled">

                  <a href="https://www.facebook.com/ecfcks"><FontAwesomeIcon icon={faFacebookF} size='3x' /></a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
};

export default FooterPage;
