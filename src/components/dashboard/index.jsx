import React, { Component } from "react";
import axios from "axios";
import { AppEndpoints } from "../../constants/AppEnpoints";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <div className="welcome-text text-center">{`Welcome Back!`}</div>
      </div>
    );
  }

  componentDidMount() {
    //this.getUserProfile();
  }
}

export default Dashboard;
