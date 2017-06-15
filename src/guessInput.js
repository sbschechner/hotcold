import React, { Component } from 'react';
import './guessinput.css';
import ScoreTable from './ScoreTable'; 

class GuessInput extends Component {
  constructor(props){
    super(props);
    this.state = {
        userGuess: null,
        actualNum: 0,
        tempNumber : null,
        previousGuessesArr: [],
        };

this.handleClick = this.handleClick.bind(this);
this.numberGenerator = this.numberGenerator.bind(this) 
this.changeTempNumber = this.changeTempNumber.bind(this)
  }

changeTempNumber(event){
this.setState({tempNumber : event.target.value})
}

handleClick(event) {
  //this.setState({userGuess: event.target.value}); 
  event.preventDefault();
  console.log("handleClick")
  console.log(this.state.tempNumber);
  console.log(this.state.userGuess);
  this.setState({userGuess: this.state.tempNumber})
  var previousGuessesArrUpdate = [...this.state.previousGuessesArr, this.state.tempNumber];
  this.setState({previousGuessesArr : previousGuessesArrUpdate});
  }

numberGenerator(){
  var actualNum = Math.floor((Math.random() * 100) + 1);
  return parseInt(actualNum)
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
          <input type='number' defaultValue = {this.state.tempNumber}  onChange = {this.changeTempNumber}/>
          </label>
            <input type="submit" value="Submit Guess" onClick = {this.handleClick}/>
          </form>
        </div>
      <ScoreTable actualNum = {this.state.actualNum} userGuess = {this.state.userGuess} previousGuessesArr = {this.state.previousGuessesArr} /> 
      </div>
    );
  }
}

export default GuessInput;