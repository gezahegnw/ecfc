import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from 'react-bootstrap/CardDeck'
import "./Serve.css";
const serveComp = () => {
  return (
    <div className="container-fluid">
      <h1 style={{textAlign: 'center'}}>This is Serve Component</h1>
      <p style={{textAlign: 'center'}}>
        Whoever speaks, as one who speaks oracles of God; whoever serves, as one
        who serves by the strength that God supplies—in order that in everything
        God may be glorified through Jesus Christ. To him belong glory and
        dominion forever and ever. Amen.
      </p>
      <h2>1 Peter 4:11 ESV</h2>
      <hr />
      <p style={{textAlign: 'center'}}>
        If you would like to serve in the church in any area, you can contact
        the pastors and let us know what you would like to help in.
      </p>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="/images/childrens.jpg " />
          <Card.Body>
            <Card.Title>Children's</Card.Title>
            <Card.Text>
            If you love kids, this is the ministry for you. Our children’s
                  team has the opportunity to share God’s love in a direct and
                  tangible way. You have the option of working with many
                  different age ranges. No experience is necessary-just a
                  willingness to serve.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/images/greeter.jpg  " />
          <Card.Body>
            <Card.Title>Greeter</Card.Title>
            <Card.Text>
            A warm smile, a firm handshake, these are the experiences that
                  make a church a home. As a greeter you set the tone of a
                  person’s visit by creating a welcoming environment. It’s also
                  a great opportunity to make a ton of new friends that you’ll
                  soon call family.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/images/usher.jpg" />
          <Card.Body>
            <Card.Title>Usher</Card.Title>
            <Card.Text>
            Walking into a service can be overwhelming for some. As a
                  usher you get to put their minds at ease as you help them find
                  their seats and fill their every need. There’s always time to
                  say hello to a few regulars and build new friendships with
                  first-time guests.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <br />
      <br />

      {/* <div className="container">
        <h1>This is Serve Component</h1>
        <p>
          Whoever speaks, as one who speaks oracles of God; whoever serves, as
          one who serves by the strength that God supplies—in order that in
          everything God may be glorified through Jesus Christ. To him belong
          glory and dominion forever and ever. Amen.
        </p>
        <h2>1 Peter 4:11 ESV</h2>
        <hr />
        <p>
          If you would like to serve in the church in any area, you can contact
          the pastors and let us know what you would like to help in.
        </p>
        <br />
        <div class="card">
          <h4 class="card-header" style={{ backgroundColor: "#c1c9c8" }}>
            Children's
          </h4>
          <div className="row no-gutters">
            <div className="col-md-2">
              <img
                src="/images/childrens.jpg"
                className="card-img"
                alt={{}}
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h4 className="card-title">Children's</h4>
                <p>
                  If you love kids, this is the ministry for you. Our children’s
                  team has the opportunity to share God’s love in a direct and
                  tangible way. You have the option of working with many
                  different age ranges. No experience is necessary-just a
                  willingness to serve.
                </p>
                <button variant="primary">CMM Ministry</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="card">
          <h4 class="card-header" style={{ backgroundColor: "#c1c9c8" }}>
            Greeter
          </h4>
          <div className="row no-gutters">
            <div className="col-md-2">
              <img
                src="/images/greeter.jpg"
                className="card-img"
                alt={{}}
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h4 className="card-title">Greeter</h4>
                <p>
                  A warm smile, a firm handshake, these are the experiences that
                  make a church a home. As a greeter you set the tone of a
                  person’s visit by creating a welcoming environment. It’s also
                  a great opportunity to make a ton of new friends that you’ll
                  soon call family.
                </p>
                <button variant="primary">More Info</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="card">
          <h4 class="card-header" style={{ backgroundColor: "#c1c9c8" }}>
            Usher
          </h4>
          <div className="row no-gutters">
            <div className="col-md-2">
              <img
                src="/images/usher.jpg"
                className="card-img"
                alt={{}}
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h4 className="card-title">Usher</h4>
                <p>
                  Walking into a service can be overwhelming for some. As a
                  usher you get to put their minds at ease as you help them find
                  their seats and fill their every need. There’s always time to
                  say hello to a few regulars and build new friendships with
                  first-time guests.
                </p>
                <button variant="primary">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default serveComp;
