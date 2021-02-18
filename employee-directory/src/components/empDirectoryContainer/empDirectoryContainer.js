import React, {Component} from "react";
import Header from "../Header/header.js"
import Search from "../Search/search.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "react-bootstrap/Table"

export default class EmpDirectoryContainer extends Component{
    render(){       
        return(
            <div>
                <Header />
                <Search />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </Table>
            </div>
        )
    }
}