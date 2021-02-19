import React, {Component} from "react";
import Header from "./Header.js";
import Search from "./Search.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from "./Results";


export default class EmpDirectoryContainer extends Component{
        state={
            results:[],
            origResults:[],
            search:""
        }
 

    // When this component mounts, fetch the random user API 
  componentDidMount() {
      console.log("mounting component");
    const data = fetch("https://randomuser.me/api/?results=100");
    data
    .then((response) => response.json())
    .then((response) => {
        this.setState({results: response.results, origResults: response.results});
    });
  }

  
  handleInputChange =(event)=>{
    const name = event.target.name
    const value = event.target.value
    console.log(event.target.name, event.target.value)
     this.setState({
        [name]:value
     })
 }

  handleFormSubmit = (event) =>{
    event.preventDefault();
    const filteredResults = this.state.origResults.filter((row)=>
        row.gender === this.state.search
    )
    this.setState({results: filteredResults});
 }

 
 handleClearResults = () => {
    this.setState({results: this.state.origResults});
 }

    render(){       
        return(
            <div>
                <Header />
                <div className="container">
                    <Search handleInputChange = {this.handleInputChange} handleFormSubmit={this.handleFormSubmit} handleClearResults={this.handleClearResults}/>
                    <Results results={this.state.results}/>
                </div>
            </div>
        )
    }
}