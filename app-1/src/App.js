import React, { Component } from "react";
import "./App.css";

import TextAndInput from './component/text'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Text Updater</p>
        <TextAndInput/>
      </div>
    );
  }
}

export default App;
