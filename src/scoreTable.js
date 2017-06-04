import React, { Component } from 'react';
import guessInput from './guessinput';
import './scoreTable.css';

class scoreTable extends Component {
  constructor(props){
    super(props);
    this.state = {previousGuesses: []};
    this.state = {actualNum : ""};
  }

previousGuess(){
this.setState(previousGuesses.push(guessinput.userGuess))
}

feedback(){
  var textBack
  if ((abs(actualNum - guessInput.userGuess))<(abs(actualNum - previousGuesses[-1]))){
     textBack = "hotter"
     return textBack
  }

  else{
    textBack = "colder"
    return textBack
  }
}


  render() {
    return(
      <div className ="scoreTableCont">
      if (previousGuesses.length >1){
        <div className ="feedbackCont">
          <div className ="feedbackHeader">
              <h2> Feedback </h2>
          </div>
          <div className="feedbackText" >
            {feedback}
          </div>
          </div>
        <h2> Previous Guesses </h2>
          <table>
            <tr>
              <th> Guess Number </th>
              <th> Guess Value </th>
            </tr>
            for (var i = 0; previousGuesses.length>i; i++) {
              <tr>
                <td> i </td>
                <td> {previousGuesses[i]} </td> //IS THIS HOW I WOULD CALL THE ARRAY WITH THE FOR LOOP?
              </tr>
            }
          </table>
      }
      else{
        <p> No Guess entered yet </p>
      }

     </div>
      );
  }
}

export default scoreTable;