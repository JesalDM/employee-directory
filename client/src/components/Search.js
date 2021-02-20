// importing dependencies
import React, {Component} from 'react';

// creates class Search as a component that extends the React.Component
class Search extends Component{
    // renders the Search bar with the Search input textbox and the buttons
    render(){
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline d-flex justify-content center">
                        <input 
                            className="form-control mr-sm-2" 
                            type="search" name="search" 
                            placeholder="Filter by Email contains"  
                            aria-label="Search" 
                            onChange={this.props.handleInputChange}/>
                        <button 
                            className="btn btn-success my-2 my-sm-0" 
                            type="submit"
                            onClick={this.props.handleFormSubmit}>Search
                        </button>
                        <button 
                            className="btn btn-outline-primary my-2 my-sm-0 mx-2" 
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