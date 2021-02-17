import React from 'react';


class Search extends React.Component{

    state = {
        search: ""
    }

    handleInputChange =(event)=>{
       const name = event.target.name
       const value = event.target.value
        this.setState({
           [name]:value
        })
    }
 
    render(){
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" name="search" placeholder="Search here" value = {this.state.search} aria-label="Search" onChange={this.handleInputChange}/>
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        )
    }
}

export default Search;