import React from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from './components/Keypad';
import Result from './components/Result';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    }
    this.calculate = this.calculate.bind(this);
    this.reset = this.reset.bind(this);
    this.backspace = this.backspace.bind(this);
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "Error"
      })
    }
  };

  // Reset the calculator
  reset = () => {
    this.setState({
      result: ""
    });
  }

  // Delete function
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }
  // Convert to Dollars
  // changeToDollars = () => {

  //   this.state.result
  // }


  // OnClick functions
  onClick = button => {
    if (button === '=') {
      this.calculate();
    }
    else if (button === 'CE') {
      this.reset();
    }
    else if (button === 'DEL') {
      this.backspace();
    }
    else if (button === 'Dollars') {

    }
    else {
      this.setState({
        result: this.state.result + button
      });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Calculator</p>
        </header>
  
        <Result result={this.state.result} />
  
        <Keypad onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;
