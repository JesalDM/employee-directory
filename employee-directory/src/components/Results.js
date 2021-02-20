import React from "react";
import Table from "react-bootstrap/Table"

// function that creates a Bootstrap table and renders the results from the API response in the table 
function Results(props) {
  return (
    <div className="mt-3">
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Image</th>
                    {/*makes the Name column Header clickable and sorts the results by Name ascending on click*/}
                    <th><span onClick={props.sortResults} style={{cursor:"pointer"}}>Name</span></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Nationality</th>
                </tr>
            </thead>
            <tbody>
                {/*maps every object in the array response as a row in the table*/}
                {props.results.map(result => (
                    <tr key={result.email}>
                        <td><img src={result.picture.thumbnail} alt="profile-pic"/></td>
                        <td>{result.name.first}{' '}{result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{result.gender}</td>
                        <td>{result.dob.date.replace(/T.*/, "")}</td>
                        <td>{result.nat}</td>
                    </tr>
                ))}
            </tbody>
        </Table> 
    </div> 
  );
}

export default Results;