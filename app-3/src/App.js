import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      things: [
        'cell phone','soy sauce packet','stockings','pants','flowers','clothes','tv','apple','sketch pad'
      ],
      userInput: '',
      filteredThings: []
    }
  }
  
  // handleChange = (e) => {
  //   this.setState({
  //     userInput: e.target.value
  //   })
  // }
  
  searchArr = (e) => {
    let { things} = this.state
    let freshFilteredThings = things.filter(word => word.startsWith(e.target.value))
    console.log('hit');
    
    this.setState({
      filteredThings: freshFilteredThings
    })
  }
  
  
  
  render() {
    let holder = []
    if(this.state.filteredThings) {
      holder = this.state.filteredThings.map((thing, i) => <h4 key={i}>{thing}</h4>)
    } else {
      holder = this.state.things.map((thing, i) => <h4 key={i}>{thing}</h4>)
    }

    return (
      <div className="App">
      <input onChange={(e) => this.searchArr(e)}></input>
      {holder}
      </div>
    );
  }
}

export default App;
