import React, { Component } from "react";
//import Jumbotron from "react-bootstrap/Jumbotron";
//import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./landingPage.css";
import PasterAsefa from '../components/Ministry/PastorAsefa'

import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from "react-responsive-carousel";
import Ministries from "../components/Ministry/MinistriesComp";
//http://www.ecfcks.org/GetImage.ashx?guid=495811e7-ed4d-466c-bef6-affbeb4d2900
class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="container" style={{marginBottom: 200}}>
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card mb-3">
                  <img
                    className="landing-image"
                    src="/images/mainpage1.jpg"
                    alt="Second slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title" id='card-title'>Card title</h5>
                    <p className="card-text" id='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mb-3">
                  <img
                    className="landing-image"
                    src="/images/mainpage2.jpg"
                    alt="Second slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title" id='card-title'>Card title</h5>
                    <p className="card-text" id='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="card mb-3">
                  <img
                    className="landing-image"
                    src="/images/mainpage3.jpg"
                    alt="Second slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title" id='card-title'>Card title</h5>
                    <p className="card-text" id='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mb-3">
                  <img
                    className="landing-image"
                    src="/images/mainpage4.jpg"
                    alt="Second slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title" id='card-title'>Card title</h5>
                    <p className="card-text" id='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="card mb-3">
                  <img
                    className="landing-image"
                    src="/images/mainpage5.jpg"
                    alt="Second slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title" id='card-title'>Card title</h5>
                    <p className="card-text" id='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mb-3">
                  <img
                    className="landing-image"
                    src="/images/mainpage6.jpg"
                    alt="Second slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title" id='card-title'>Card title</h5>
                    <p className="card-text" id='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              {/* start */}
              <div className="carousel-item">
                <div className="card mb-3">
                  <img
                    className="landing-image"
                    src="/images/mainpage7.jpg"
                    alt="Second slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title" id='card-title'>Card title</h5>
                    <p className="card-text" id='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mb-3">
                  <img
                    className="landing-image"
                    src="/images/mainpage8.jpg"
                    alt="Second slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title" id='card-title'>Card title</h5>
                    <p className="card-text" id='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mb-3">
                  <img
                    className="landing-image"
                    src="/images/mainpage9.jpg"
                    alt="Second slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title" id='card-title'>Card title</h5>
                    <p className="card-text" id='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mb-3">
                  <img
                    className="landing-image"
                    src="/images/mainpage10.jpg"
                    alt="Second slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title" id='card-title'>Card title</h5>
                    <p className="card-text" id='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mb-3">
                  <img
                    className="landing-image"
                    src="/images/mainpage11.jpg"
                    alt="Second slide"
                  />
                  <div className="card-body">
                    <h5 className="card-title" id='card-title'>Card title</h5>
                    <p className="card-text" id='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid">
          <div class="row">
            <div class="col-sm">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="/images/paster-henoke.jpg"
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title" >Pastor Henock Tsegaye</h4>

                      <h3>Main Pastor</h3>
                      <p className="card-text" >
                        Teaching the word of God every Sunday, based on prepared
                        curriculum, so that they would know if from childhood
                        and be equipped for. And this is done by understanding
                        their childhood, showing them love and patience. It will
                        be given to all children from age 3 to 13. Not only is
                        teaching children a source of joy, but it is also being
                        one of the pages in.
                      </p>
                      <p className="card-text" >
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 1st card closed here */}
            {/* 2nd card opens here */}
            <div class="col-sm">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="/images/pastorashenife.jpg"
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">Pastor Ashenafi Zewge</h4>
                      <h3>Assistant Pastor</h3>
                      <p className="card-text" >
                        The Nursery ministry helps parents to attend the Sunday
                        service properly, by taking care of their infants and
                        toddlers. Taking care of children, comforting them when
                        they cry and laughing with them when they laugh
                        refreshes the soul. Additionally, it helps parents
                        worship with no distractions and making parents happy is
                        a good ministry.
                      </p>
                      <p className="card-text" >
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* container */}
        <div className="container">
          <div class="row">
            <div class="col-sm">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <Link to=''>
                    <img
                      src="/images/asefa.png"
                      className="card-img"
                      alt="..."
                    />
                    </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title" >Dr. Pastor Assefa Alemu</h4>

                      <p className="card-text" >
                      የመንፈስ አባቶቻችንን ማክበር በረከትን ለትውልድ ማስተላለፍ ነው.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
            <hr />
        <div>
          <Ministries />
        </div>
      </div>
    );
  }
}

export default LandingPage;
