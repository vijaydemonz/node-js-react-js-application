import React, { Component } from "react";
import Home from "./home";
import { Switch, Route } from "react-router-dom";
import Create from "./Create";
import ViewUser from "./viewUser";
// import Delete from "./Delete";
// import Update from "./update";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Create" component={Create} />
          <Route path="/users/:id" component={ViewUser} />
          {/* <Route path="/delete/:id" component={Delete} />
          <Route path="/update/:id" component={Update} /> */}
        </Switch>
      </main>
    );
  }
}

export default Main;
