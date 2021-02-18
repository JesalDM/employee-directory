import React from "react";
import Table from "react-bootstrap/Table"

function Results(props) {
  return (
    <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Nationality</th>
            </tr>
        </thead>
        <tbody>
            {props.results.map(result => (
                <tr key={result.email}>
                    <td><img src={result.picture.thumbnail} alt="profile-pic"/></td>
                    <td>{result.name.first}{result.name.last}</td>
                    <td>{result.phone}</td>
                    <td>{result.email}</td>
                    <td>{result.dob.date}</td>
                    <td>{result.nat}</td>
                </tr>
            ))}
        </tbody>
    </Table>  
  );
}

export default Results;