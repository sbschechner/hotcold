import React, { Component } from 'react';
import './guessinput.css';

class guessInput extends Component {
  constructor(props){
    super(props);
    this.state = {userGuess: ""};

  
this.handleClick = this.handleClick.bind(this);
this.numberGenerator = this.numberGenerator.bind(this) 
  }

handleClick(event) {
  this.setState({value: event.target.value});
  }

numberGenerator(){
  var actualNum = Math.floor((Math.random() * 100) + 1);
  return actualNum
}

  render() {
      const userGuess = this.state.userGuess; //dont need this because the onChange below handles it 
      return (
      <div className ="guessBox">
        <div className="guessInputBox">
          <form>
            <label>
            Enter your guess below
          <input type= 'text' value = {this.state.userGuess} {userGuess} onChange={this.handleClick}/>
          </label>
          
            <input type="submit" value="Submit" />
          </form>
        </div>
      <scoreTable actualNum = {numberGenerator()}/>
      </div>
    );
  }
}

export default guessInput;