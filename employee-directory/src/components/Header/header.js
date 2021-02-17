import React from 'react';
import "./header-style.css"

class Header extends React.Component{
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