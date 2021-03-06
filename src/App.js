import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "@vaadin/vaadin-date-picker";
import "@vaadin/vaadin-button";
import "@vaadin/vaadin-grid";
import "@vaadin/vaadin-text-field";

class App extends Component {
  componentDidMount() {
    let people = [];
    this.refs.addButton.addEventListener("click", e => {
      people = [
        ...people,
        {
          firstName: this.refs.firstName.value,
          lastName: this.refs.lastName.value
        }
      ];
      this.refs.grid.items = people;
      this.refs.firstName.value = "";
      this.refs.lastName.value = "";
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <vaadin-date-picker label="When were you born?" />
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
