import React from 'react';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Header extends React.Component{
    render(){
        return (
            <div>
            <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Transcriptions</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto justify-content-end">
                        <Navbar.Brand>
                            <img alt="Upload" src={require('../challenge_assets/upload.svg')}></img>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <img alt="Fetch" src={require('../challenge_assets/fetch-document.svg')}></img> 
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
            </div>
        ) 
    }
}

export default Header;