import React from 'react';
import './App.css';
import KeyPadComponent from './Components/KeyComponent';
import ResultComponent from './Components/ResultComponent';

class App extends React.Component {
  // <div className="App">
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if (button === "=") {
      this.calculate();
    }

    else if (button === "C") {
      this.reset();
    }
    else if (button === "CE") {
      this.backspace();
    }

    else {
      this.setState({
        result: this.state.result + button
      }
      )

    }
  };

  calculate = () => {

    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    }
    catch (e) {

      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };


  backspace = () => {

    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {

    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <ResultComponent result={this.state.result}></ResultComponent>
          <KeyPadComponent onClick={this.onClick}></KeyPadComponent>
        </div>
      </div>
    );

  }
}

export default App;
