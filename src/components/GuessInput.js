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
this.callAPI = this.callAPI.bind(this)
  }

changeTempNumber(event){
this.setState({tempNumber : event.target.value})
}

callAPI(){
  var URL =  'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NASDAQ:MSFT&apikey=62TKMSSDIW3EVTJF'
  fetch(URL).then((response) => response.json())
     
     .then(function(data){
        console.log("hello", data)
        this.setState({stock : data})
    
    .catch((err) => (){
        console.log ("the errorr is " + err);
      }
    }
  )
}

handleClick(event) {
  //this.setState({userGuess: event.target.value}); 
  event.preventDefault();
  this.setState({userGuess: this.state.tempNumber})
  var previousGuessesArrUpdate = [...this.state.previousGuessesArr, this.state.tempNumber];
  this.setState({previousGuessesArr : previousGuessesArrUpdate});
  this.callAPI();
  }

numberGenerator(){
  var actualNum = Math.floor((Math.random() * 100) + 1);
  return actualNum
}

componentDidMount(){ 
  var numberCreate = this.numberGenerator()
  this.setState({actualNum : numberCreate})
}


  render() {
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
