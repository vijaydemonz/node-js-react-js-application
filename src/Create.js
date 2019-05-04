import React, { Component } from "react";
import "./App.css";
import { Form, Button } from "react-bootstrap";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      First_Name: "",
      Last_Name: "",
      username: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const { First_Name, Last_Name, username } = this.state;
    fetch("http://127.0.0.1:4400/Create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name: First_Name,
        last_name: Last_Name,
        username: username
      })
    })
      .then(response => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <div
          className="container"
          style={{ marginTop: "50px", marginLeft: "80px" }}
        >
          <form
            className="form col-mb-3"
            method="POST"
            onSubmit={this.handleSubmit}
          >
            <Form.Group controlId="formBasicText" className="col-sm-7">
              <Form.Control
                name="First_Name"
                type="text"
                placeholder="First Name"
                onChange={this.handleInput}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicText" className="col-sm-7">
              <Form.Control
                name="Last_Name"
                type="text"
                placeholder="Last Name"
                onChange={this.handleInput}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="col-sm-7">
              <Form.Control
                name="username"
                type="email"
                placeholder="Enter email"
                onChange={this.handleInput}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit" position="Left">
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;
