import React, {Component} from "react";
import Header from "./Header.js"
import Search from "./Search.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from "./Results"

export default class EmpDirectoryContainer extends Component{
    render(){       
        return(
            <div>
                <Header />
                <Search />
                <Results />
            </div>
        )
    }
}