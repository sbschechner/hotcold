import React, { Component } from 'react';
import guessInput from './guessinput';
import './scoreTable.css';

class scoreTable extends Component {
  constructor(props){
    super(props);
    this.state = {previousGuessesArr: [0]};
    this.state = {actualNum : ""}; //should receive the actual num from the guess input as well
    this.state =  {userGuess: ""}; //SHOULD RECEIVE THE USER'S GUESS HERE from guess input? 

  this.previousGuess= this.previousGuess.bind(this); 
  this.runFeedBackFunction = this.runFeedBackFunction.bind(this);
  this.runOpeningGuess = this.runOpeningGuess.bind(this);
  this.textChange = this.textChange.bind(this);
  }

previousGuess(previousGuessesArr, userGuess){
previousGuessesArrUpdate = previousGuessesArr.push(userGuess)
this.setState({previousGuessesArr : previousGuessesArrUpdate})
}

runFeedBackFunction (props){ //does passing props pass Acutal Num and PRevious Guesses Arr?
    if ((abs(actualNum - previousGuessesArr[-1])<(abs(actualNum - previousGuesses[-2]))){
     textBack = "hotter"
     return textBack
  }

  else{
    textBack = "colder"
    return textBack
  }
}
      } 

runOpeningGuess(props){
      return <p> great first guess </p>
      }

 textChange(props){
    if (this.state.previousguessesArr.length >2){
      return <runFeedBackFunction />
    }
    else return <runOpeningGuess />
  }   

showtable(previousguessesArr){
    results ="";
    for(i=1; previousguessesArr.length>=i;i++){
     results = results + "<tr>" + "<td>" + i + "</td>" + "<td>" + previousguessesArr[i-1] + "</td>"  + "</tr>";
    }
  }
}

  render() { 
    {previousGuess()} //puts the user input into the previous guess
    return(
      <div className ="scoreTableCont">
        <div className ="feedbackCont">
          <div className ="feedbackHeader">
              <h2> Feedback on Guess </h2>
          </div>

          <div className= "feedbackText" >
           <textChange({this.state.previousGuessesArr}) />
          </div>

          <div className = "scoresPrintTable">
            <table>
              <tr>
              <th> Guess Number </th>
              <th> Guess Value </th>
            </tr>
             {showtable(this.state.previousguessesArr)}

            </table>
          </div>
          </div>

     </div>
      );
  }
}

export default scoreTable;