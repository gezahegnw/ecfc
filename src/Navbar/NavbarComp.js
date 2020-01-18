import React from 'react';
//import Navbar from 'react-bootstrap/Navbar';
//import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavItem } from "react-bootstrap";
const navbar = () => {
    return (
        <div>
            <Container>
            {/* expand="lg"  */}
            <Navbar  bg="dark" variant="dark" fixed="top"> 
                <Navbar.Brand href="#home">Ethiopian Christian Fellowship Church Kansas
                </Navbar.Brand>
                <Nav className="mr-auto" pullRight>
                    <Nav.Link href="#ministries">Ministries</Nav.Link>
                    <Nav.Link href="#calender">Calender</Nav.Link>
                    <Nav.Link href="#watch">Watch</Nav.Link>
                </Nav>
                </Navbar>
            </Container>
            
        </div>
    );
}

export default navbar