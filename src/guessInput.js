import React, { Component } from 'react';
import './guessinput.css';

class guessInput extends Component {
  constructor(props){
    super(props);
    this.state = {userGuess: ""};
    this.state = {isToggleOn: true};

  
this.handleClick = this.handleClick.bind(this);
  }

handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render() {
      const userGuess = this.state.userGuess;
      <numberGenerator/>
      return (
      <div className ="guessBox">
        <h2 className = "guessBoxTitle">
          Enter your guess below
        </h2>
        <div className="guessInputBox">
          <input value = {userGuess} />
        </div>
        <button onClick={this.handleClick}>
          Submit Guess
          {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        </div>
    );
  }
}

export default guessInput;