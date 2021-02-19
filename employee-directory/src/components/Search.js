import React, {Component} from 'react';

class Search extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input 
                            className="form-control mr-sm-2" 
                            type="search" name="search" 
                            placeholder="Search here"  
                            aria-label="Search" 
                            onChange={this.props.handleInputChange}/>
                        <button 
                            className="btn btn-success my-2 my-sm-0" 
                            type="submit"
                            onClick={this.props.handleFormSubmit}>Search
                        </button>
                    </form>
                </nav>
            </div>
        )
    }
}

export default Search;