// imports dependencies
import React, {Component} from 'react';
import "../styles/Header.css"

// creates class Header as a component that extends the React.Component
class Header extends Component{
    render(){
        return(
            <div>
                <div className="main-container">
                    <div className="container-fluid">
                        <div className="jumbotron">
                        <h1 className="header-title">Employee Directory</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;