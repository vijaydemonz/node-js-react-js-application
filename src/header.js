import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
// import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
// import sidebar from "./sidebar";
// import classes from "module.sass";

class Header extends Component {
  state = {
    appname: "C . U . R . D"
  };
  render() {
    return (
      <div>
        {/* <Drawer
          open={classes.sidebar.state.left}
          onClose={classes.sidebar.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={classes.sidebar.toggleDrawer("left", false)}
            onKeyDown={classes.sidebar.toggleDrawer("left", false)}
          />
        </Drawer> */}
        <Navbar bg="primary" variant="dark" width="100%">
          <Nav.Item>
            {/* <Button onClick={sidebar.toggleDrawer("left", false)}>menu</Button> */}
          </Nav.Item>
          <Navbar.Brand to="/">{this.state.appname}</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="Nav.Link" style={{ color: "white" }} to="/create">
              Create
            </Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;
