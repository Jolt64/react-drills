import React, { Component } from "react";

class TextAndInput extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      things: ""
    };

  }
  
  handleChange = (e) => {
    this.setState({
      userInput: e
    })
  }

  render() {
    return(
      <div>
        <input onChange={(e) => {this.handleChange(e.target.value)}}></input>
        <h4>{this.state.userInput}</h4>
      </div>
    )
  }
}
export default TextAndInput;
