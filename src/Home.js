import React from 'react';
import axios from 'axios';
import {Card, Container, Row, Col} from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import './Home.css';
import { Navbar, Nav } from 'react-bootstrap';

class Home extends React.Component{
    baseUrl = "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";

      constructor(props) {
        super(props);
        this.state = {
          data: []
        }
      }

    componentDidMount(){
        this.fetchData();
    }

    async fetchData(){
        try {
            await axios.get(this.baseUrl).then((result) => {
                this.setState({
                    data: result.data
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    async uploadData(){
        try {
            const body = this.state.data;
            await axios.post(this.baseUrl, { body }).then((result) => {
                alert("Data sent sucessfully!");
            });
        } catch (error) {
            console.log(error);
        }
    }

    removeData(idx){
        console.log(idx);
        const array = this.state.data.filter(item => item["id"] !== (idx--));
        this.setState({ data: array });

        console.log(this.state.data); 
    }

    addData(){

    }

    render() {
        const removeIconStyle = {
            float: "right",
            margin: "10px",
        };
        const addIconStyle = {
            margin: "0 0 0 50%"
        };
        return (
            <div>
            <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Transcriptions</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto justify-content-end">
                        <Navbar.Brand onClick={this.uploadData.bind(this)}>
                            <img alt="Upload" src={require('./challenge_assets/upload.svg')}></img>
                        </Navbar.Brand>
                        <Navbar.Brand onClick={this.fetchData.bind(this)}>
                            <img alt="Fetch" src={require('./challenge_assets/fetch-document.svg')}></img> 
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
            <Container>
                    <Row>
                        <Col sm="12" xl="6">
                            {this.state.data.map((item) => {
                                return (
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col lg="1">
                                                    <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                                    <img alt="voice1" src={require('./challenge_assets/person.svg')}></img>
                                                </Col>
                                                <img onClick={this.removeData.bind(this, item["id"])} alt="delete" src={require('./challenge_assets/delete.svg')} style={removeIconStyle}></img>
                                                <Card.Title>{item["voice"]}</Card.Title>
                                            </Row>
                                            <Card.Text>
                                                {item["text"]}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </Col>
                        <img id="addIcon" onClick={this.addData.bind(this)} alt="add_row" src={require('./challenge_assets/add-row.svg')}></img>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;