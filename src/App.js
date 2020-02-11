import React, { Component } from "react";
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCross } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./container/LandingPage";
import Ministries from "./components/Ministry/MinistriesComp";
import Outreach from "./components/Outreach/OutreachComp";
import AdultsComp from "./components/Adults/AdultsComp";
import BibleStudyComp from "./components/BibleStudy/BibleStudyComp";
import ChildrenComp from "./components/Children/ChildrenComp";
import ContactComp from "./components/ContactUs/ContactUsComp";
import FamilyPerRegistrationComp from "./components/FamilyPre-Registration/FamilyPre-RegistrationComp";
import PrayerComp from "./components/Prayer/PrayerComp";
import ServeComp from "./components/Serve/ServeComp";
import YouthComp from "./components/Youth/YouthComp";
import FooterPage from "./components/Footer/FooterComp";
import WatchComp from "./components/Watch/WatchComp";
import EventsComp from "./components/EventFolder/EventsComp";
import StickyFooter from "./components/Footer/StickyFooter";

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-secondary">
            <div className="navbar-brand">
              {" "}<FontAwesomeIcon icon={faCross} size='3x'/>
              Ethiopian Christian Fellowship Church Kansas
              
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to={"/"} className="nav-link">
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Ministries
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to={"/children"} className="nav-link">
                      Children
                    </Link>
                    <Link to={"/youth"} className="nav-link">
                      Youth
                    </Link>
                    <Link to={"/adults"} className="nav-link">
                      Adults
                    </Link>
                    <Link to={"/prayer"} className="nav-link">
                      Prayer
                    </Link>
                    <Link to={"/outreach"} className="nav-link">
                      Outreach
                    </Link>
                    <Link to={"/serve"} className="nav-link">
                      Serve
                    </Link>
                    <Link to={"/biblestudy"} className="nav-link">
                      Bible Study
                    </Link>
                    <Link to={"/contact-us"} className="nav-link">
                      Contact Us
                    </Link>
                    <Link to={"/familyPre-Registraion"} className="nav-link">
                      Family Pre_Registration
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to={"/events"} className="nav-link">
                    {" "}
                    Events{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/watch"} className="nav-link">
                    {" "}
                    Watch{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <br />
          <hr />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/ministries" component={Ministries} />
            <Route path="/outreach" component={Outreach} />
            <Route path="/biblestudy" component={BibleStudyComp} />
            <Route path="/children" component={ChildrenComp} />
            <Route path="/adults" component={AdultsComp} />
            <Route
              path="/familyPre-Registraion"
              component={FamilyPerRegistrationComp}
            />
            <Route path="/prayer" component={PrayerComp} />
            <Route path="/serve" component={ServeComp} />
            <Route path="/youth" component={YouthComp} />
            <Route path="/contact-us" component={ContactComp} />
            <Route path="/events" component={EventsComp} />
            <Route path="/watch" component={WatchComp} />
          </Switch>
        </div>
        <div>
          <FooterPage />
        </div>
        <div>
          <StickyFooter />
        </div>
      </Router>
    );
  }
}

export default App;
