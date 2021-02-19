import React, {Component} from 'react';

class Search extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline d-flex justify-content center">
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
                        <button 
                            className="btn btn-outline-primary my-2 my-sm-0" 
                            type="button"
                            onClick={this.props.handleClearResults}>Clear
                        </button>
                    </form>
                </nav>
            </div>
        )
    }
}

export default Search;