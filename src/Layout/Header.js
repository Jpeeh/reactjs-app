import React from 'react';
import './Header.css';
import {Container, Navbar} from 'react-bootstrap';

class Header extends React.Component{
    render(){
        return (
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand>Transcriptions</Navbar.Brand>
                <Navbar.Brand><img alt="Fetch Document" src="../../public/challenge_assets/fetch-document.svg"></img></Navbar.Brand>
                <Navbar.Brand><img alt="Upload" src="../../public/challenge_assets/upload.svg"></img></Navbar.Brand>
            </Navbar>
          </Container>
        ) 
    }
}

export default Header;