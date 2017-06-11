import React, { Component } from 'react';
import './scoreTable.css';

class ScoreTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      previousGuessesArr: [],
      }; 


  this.previousGuess= this.previousGuess.bind(this); 
  this.runFeedBackFunction = this.runFeedBackFunction.bind(this);
  this.runOpeningGuess = this.runOpeningGuess.bind(this);
  this.textChange = this.textChange.bind(this);
  this.showtable = this.showtable.bind(this);
}

previousGuess(){
  var previousGuessesArrUpdate = [...this.state.previousGuessesArr, this.props.userGuess];
  this.setState({previousGuessesArr : previousGuessesArrUpdate});
}

runFeedBackFunction(){
    var textBack;
    if ((Math.abs(this.props.actualNum - this.state.previousGuessesArr[-1]))>(Math.abs(this.props.actualNum - this.props.userGuess))){
     textBack = "hotter";
     return textBack;
  }

    if (this.props.actualNum == this.props.userGuess){
      textBack = "Correct";
      return textBack;
    }

  else{
   textBack = "colder";
    return textBack;
  }
} 

runOpeningGuess(){
      return <p> great first guess </p>
      }

 textChange(){ //should run the conditional formatting 
    if (this.state.previousGuessesArr.length >=2){
      return this.runFeedBackFunction();
    }
    else {
      return this.runOpeningGuess();
    }
  }   

showtable(){
    var guessList = this.state.previousGuessesArr.map((guess, index) => 
      <tr key = {index}>
        <td>
        {index+1}
        </td>
        <td>
        {guess}
        </td>
      </tr>
      );
  return (
    <tbody>{guessList}</tbody>
    );
}

//why cants i put this.previousGuess() in render  what does.bind do ??? 
//previous guess is only running the first time ----  i know this is because of component did mount....i want it to run when new guess is updated but i put it in the render and it crashed 
//feedback function is not working for return hotter - cant figure out why it is not running into that if loop 

componentDidMount(){
    this.previousGuess();
}


  render() { 
    console.log("im in score tabe as the actual num " + this.props.actualNum);
    console.log(this.state.previousGuessesArr);
    console.log("I'm in score table as the number passes from user guess " + this.props.userGuess);
    return(
      <div className ="scoreTableCont">
        <div className ="feedbackCont">
          <div className ="feedbackHeader">
              <h2> Feedback on Guess </h2>
          </div>

          <div className= "feedbackText" >
           {this.textChange()}  
          </div>

          <div className = "scoresPrintTable">
          <table>
            <tr id= "headers">
            <th> Previous Guess Number </th>
            <th> Previous Guess Value </th>
            </tr>
             {this.showtable()}
          </table>
          </div>
          </div>

     </div>
      );
  }
}

export default ScoreTable;