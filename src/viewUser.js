import React, { Component } from "react";
import "./App.css";

class ViewUser extends Component {
  constructor(props) {
    super();
    this.state = {
      id: 0,
      first_name: "",
      last_name: "",
      username: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10);
    console.log(id);
    fetch(`http://127.0.0.1:4400/users/get?id=${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          id: data.data[0].id,
          first_name: data.data[0].first_name,
          last_name: data.data[0].last_name,
          username: data.data[0].username
        });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  delete() {
    const delid = this.state.id;
    fetch(`http://127.0.0.1:4400/delete?id=${delid}`)
      .then(data => {
        console.log(data);
        this.props.history.push("/");
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const { id, first_name, last_name, username } = this.state;

    fetch("http://127.0.0.1:4400/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        first_name: first_name,
        last_name: last_name,
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
        <div className="container" style={{ marginTop: "20px" }}>
          <form
            className="form-horizontal"
            method="POST"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <h2 className="control-label col-sm-8">
                Update / Delete details
              </h2>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-4" htmlFor="ID">
                ID:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  value={this.state.id}
                  className="form-control"
                  readOnly
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-4" htmlFor="first_name">
                First Name:
              </label>
              <div className="col-sm-offset-2 col-sm-8">
                <input
                  type="text"
                  value={this.state.first_name}
                  className="form-control"
                  id="first_name"
                  placeholder="First Name"
                  name="first_name"
                  onChange={this.handleInput}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-4" htmlFor="last_name">
                Last Name:
              </label>
              <div className="col-sm-offset-2 col-sm-8">
                <input
                  type="text"
                  value={this.state.last_name}
                  className="form-control"
                  id="last_name"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={this.handleInput}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="first_name">
                First Name:
              </label>
              <div className="col-sm-offset-2  col-sm-8">
                <input
                  type="text"
                  value={this.state.username}
                  className="form-control"
                  id="Username"
                  placeholder="UserName"
                  name="username"
                  onChange={this.handleInput}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-8">
                <button type="submit" className="btn btn-success">
                  Update
                </button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.delete}
                >
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewUser;
