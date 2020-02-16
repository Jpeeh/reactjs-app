import React from 'react';
import axios from 'axios';
import Header from './Layout/Header';

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
        return ( 
        <div>
            <Header/>
            <h2>React Web App</h2>
            {this.state.data.map(item => <p>{item.text}</p>)}
        </div> 
        );
    }
}

export default Home;