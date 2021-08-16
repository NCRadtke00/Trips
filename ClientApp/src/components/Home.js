import React, { Component } from "react";
import "./style.css";
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div className="home">
          <h1>Welcome to trips manager</h1>
          <h2>Use this manager to manage your trips!</h2>
        </div>
        <div className="options">
          <li>Add a new trip</li>
          <li>Updating a past trip</li>
          <li>Delete a bad trip</li>
          <li>Show All Trips</li>
        </div>
      </div>
    );
  }
}
