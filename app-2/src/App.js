import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: ['thing','thing2','thing3']
    }
  }

  display = () => {
    let arr = this.state.list
    let listItems = []

    for(let i=0; i < arr.length; i++)
    listItems.push(<h1>{this.state.list[i]}</h1>)
    return listItems
    
  }

  render() {
    return (
      <div className="App">
      {this.display()}
      </div>
    );
  }
}

export default App;
