import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'

import Navbar from './Navbar/NavbarComp';
import Ministries from './Ministries/Ministries';
import FooterPage from './Footer/FooterComp';
class MainScreen extends Component {
    render () {
        return (
            <div>
                <Navbar />
               
                <div>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                    
                      This is a simple hero unit, a simple jumbotron-style component for calling
                      extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                <Ministries />
                </div>
                <hr />
                <FooterPage />
            </div>
           
        );
    }
}

export default MainScreen;