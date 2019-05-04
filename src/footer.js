import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Footer extends Component {
  state = {
    footer: "C.U.R.D  all copyrights reseverd"
  };
  render() {
    return (
      <div style={{ position: "fixed", bottom: "0px", alignitem: "center" }}>
        <p>{this.state.footer}</p>
      </div>
    );
  }
}

export default Footer;
