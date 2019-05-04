import React, { Component } from "react";
import "./App.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import App from "./App";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:4400/")
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data.data });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(p => (
              <tr key={p.id}>
                <td>#{p.id}</td>
                <td>{p.first_name}</td>
                <td>{p.last_name}</td>
                <td>{p.username}</td>
                <td>
                  <Link to={`/users/${p.id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default App;
