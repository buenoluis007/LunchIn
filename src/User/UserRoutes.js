import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import UserHome from "./UserHome/UserHome.js";
import GoogleM from "../Map/googleMaps.js";

class UserRoutes extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Route
          exact
          path={this.props.match.path}
          render={() => {
            return <Redirect to="/user/home" />;
          }}
        />
        <Route
          exact
          path={`${this.props.match.path}/home`}
          component={UserHome}
        />
      <GoogleM/>
      </div>
    );
  }
}
export default UserRoutes;
