import React, {Component} from "react";
import Header from "./Header.js";
import Search from "./Search.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from "./Results";
import axios from 'axios';

export default class EmpDirectoryContainer extends Component{
    state={
        results:[],
        search:""
    }

    // When this component mounts, fetch the random user API 
  componentDidMount() {
    const data = fetch("https://randomuser.me/api/?results=100");
    data
    .then((response) => response.json())
    .then((response) => {
        this.setState({results: response.results});
    });
  }

    render(){       
        return(
            <div>
                <Header />
                <Search />
                <Results results={this.state.results}/>
            </div>
        )
    }
}