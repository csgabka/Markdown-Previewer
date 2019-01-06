import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      output: ""
    }
  }

  onType = (e) => {
    this.setState({output: e.target.value});
  }

  render() {
    return (
      <div className="App">
      <h1>Markdown Previewer</h1>
          <img src={logo} className="App-logo" alt="logo" />
            <Input onType={this.onType}/>
            <Output output={this.state.output}/>
      </div>
    );
  }
}

export default App;
