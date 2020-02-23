import React from 'react';
import axios from 'axios';
import Header from './Layout/Header';
import {Card, Container, Row, Col} from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import './Home.css';

class Home extends React.Component{
    baseUrl = "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";
    state = {
        data: []
      };

    componentDidMount(){
        axios.get(this.baseUrl).then(result => {
            this.setState({
                data: result.data
            });
      });
    }

    render() {
        const divStyle = {
            float: "right",
            margin: "10px",
        };
        return (
            <div>
                <Header />
                <Container>
                    <Row>
                        <Col sm="12" xl="6">
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col lg="1">
                                            <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            <img alt="voice1" src={require('./challenge_assets/person.svg')}></img>
                                        </Col>
                                        <img alt="delete" src={require('./challenge_assets/delete.svg')} style={divStyle}></img>
                                        <Card.Title>Voice 1</Card.Title>
                                    </Row>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col lg="1">
                                            <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            <img alt="voice2" src={require('./challenge_assets/person.svg')}></img>
                                        </Col>
                                        <Card.Title>Voice 2</Card.Title>
                                        <img alt="delete" src={require('./challenge_assets/delete.svg')} style={divStyle}></img>
                                    </Row>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col lg="1">
                                            <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            <img alt="voice3" src={require('./challenge_assets/person.svg')}></img>
                                        </Col>
                                        <Card.Title>Voice 3</Card.Title>
                                        <img alt="delete" src={require('./challenge_assets/delete.svg')} style={divStyle}></img>
                                    </Row>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;