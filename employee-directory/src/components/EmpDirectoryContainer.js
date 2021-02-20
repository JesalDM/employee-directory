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
    const data = fetch("https://randomuser.me/api/?results=100");
    data
    .then((response) => response.json())
    .then((response) => {
        this.setState({results: response.results, origResults: [...response.results]});
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
        row.email.includes(this.state.search)
    )
    this.setState({results: filteredResults});
 }

 
    handleClearResults = () => {
        this.setState({results: this.state.origResults});
    }

    sortTable = (event) => {
        console.log(event.target.id);
        const sortedResults = this.state.results.sort((a, b) => {
            let comparison = 0;
            const aName = (a.name.first + " " + a.name.last).toUpperCase();
            const bName = (b.name.first + " " + b.name.last).toUpperCase();
            if (aName > bName) {
                comparison = 1;
            }
            if (aName < bName) {
                comparison = -1;
            }
            return comparison;
        });
        this.setState({ results: sortedResults });
        return false;
    };

    render(){       
        return(
            <div>
                <Header />
                <div className="container">
                    <Search handleInputChange = {this.handleInputChange} handleFormSubmit={this.handleFormSubmit} handleClearResults={this.handleClearResults}/>
                    <Results results={this.state.results} sortResults={this.sortTable}/>
                </div>
            </div>
        )
    }
}