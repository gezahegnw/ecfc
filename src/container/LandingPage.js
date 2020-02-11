import React, { Component } from "react";
//import Jumbotron from "react-bootstrap/Jumbotron";
//import Button from "react-bootstrap/Button";
import Styles from "./LandingPage.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Ministries from "../components/Ministry/MinistriesComp";
//http://www.ecfcks.org/GetImage.ashx?guid=495811e7-ed4d-466c-bef6-affbeb4d2900
class LandingPage extends Component {
  render() {
    return (
    <div>
      <div className="container" >
        <Carousel
          autoPlay
          interval={3000}
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          
        >
          <div>
            <img src="/images/image1.jpg" alt="" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="/images/image2.jpg" alt="" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              src="/images/image3.jpg"
              alt=""
            />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img
              src="/images/image4.jpg"
              alt=""
            />
            <p className="legend">Legend 4</p>
          </div>
          <div>
            <img
              src="/images/image5.jpg"
              alt=""
            />
            <p className="legend">Legend 5</p>
          </div>
          <div>
            <img
              src="/images/image6.jpg"
              alt=""
            />
            <p className="legend">Legend 6</p>
          </div>
          <div>
            <img
              src="/images/worship-team.jpg"
              alt=""
            />
            <p className="legend">Legend 7</p>
          </div>
          <div>
            <img
              src="/images/image6.jpg"
              alt=""
            />
            <p className="legend">Legend 8</p>
          </div>
          <div>
            <img
              src="/images/image6.jpg"
              alt=""
            />
            <p className="legend">Legend 9</p>
          </div>
          <div>
            <img src="/images/image6.jpg" alt="" />
            <p className="legend">Legend 10</p>
          </div>
          <div>
            <img
              src="/images/marriage-enrichment.jpg"
              alt=""
            />
            <p className="legend">Legend 11</p>
          </div>
          <div>
            <img
              src="/images/image6.jpg"
              alt=""
            />
            <p className="legend">Legend 12</p>
          </div>
          <div>
            <img
              src="/images/image6.jpg"
              alt=""
            />
            <p className="legend">Legend 13</p>
          </div>
          <div>
            <img
              src="/images/image6.jpg"
              alt=""
            />
            <p className="legend">Legend 14</p>
          </div>
          <div>
            <img
              src="/images/image6.jpg"
              alt=" is not found"
            />
            <p className="legend">Legend 14</p>
          </div>
        </Carousel>
    </div>
        <br />
        <br />
        <hr />
        <div className="container">
            <Ministries />

        </div>
      </div>
    );
  }
}

export default LandingPage;
