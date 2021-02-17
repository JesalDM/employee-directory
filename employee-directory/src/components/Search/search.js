import React from 'react';


class Search extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search here" aria-label="Search" />
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        )
    }
}

export default Search;