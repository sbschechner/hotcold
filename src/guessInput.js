import React, { Component } from 'react';
import './guessinput.css';
import ScoreTable from './ScoreTable'; 

class GuessInput extends Component {
  constructor(props){
    super(props);
    this.state = {
        userGuess: "",
        actualNum: 0,
        };

this.handleClick = this.handleClick.bind(this);
this.numberGenerator = this.numberGenerator.bind(this) 
  }

handleClick(event) {
  this.setState({userGuess: event.target.value}); 
  }

numberGenerator(){
  var actualNum = Math.floor((Math.random() * 100) + 1);
  return actualNum
}

componentDidMount(){ //only runs initial number generator on the first one but then when i hit submit guess, it runs again?
  var numberCreate = this.numberGenerator()
  this.setState({actualNum : numberCreate})
}

//difference between onChange and onClick? so found out it is passing the guess to Scoretable, but then score table is not updating...
  
  render() {
    console.log("this is the guess input" + this.state.userGuess + "did a guess number show up?");
      return (
      <div className ="guessBox">
        <div className="guessInputBox">
          <form>
            <label>
            Enter your guess below between 1 and 100:
          <input type='number' value = {this.state.userGuess} onChange={this.handleClick}/>
          </label>
            <input type="submit" value="Submit Guess" />
          </form>
        </div>
      <ScoreTable actualNum = {this.state.actualNum} userGuess = {this.state.userGuess} /> 
      </div>
    );
  }
}

export default GuessInput;