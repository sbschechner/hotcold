import React, { Component } from 'react';
import './scoreTable.css';

class ScoreTable extends Component {
  constructor(props){
    super(props);
    this.state = {previousGuessesArr: [0]}; 

  this.previousGuess= this.previousGuess.bind(this); 
  this.runFeedBackFunction = this.runFeedBackFunction.bind(this);
  this.runOpeningGuess = this.runOpeningGuess.bind(this);
  this.textChange = this.textChange.bind(this);
  this.showtable = this.showtable.bind(this);
}

previousGuess(){
  var previousGuessesArrUpdate = [...this.state.previousGuessesArr, this.props.userGuess];
  this.setState({previousGuessesArr : previousGuessesArrUpdate})
}

runFeedBackFunction(){
    var textBack;
    if ((Math.abs(this.props.actualNum - this.state.previousGuessesArr[-1])<(Math.abs(this.props.actualNum - this.state.previousGuessesArr[-2])))){
     textBack = "hotter";
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
    if (this.state.previousGuessesArr.length >2){
      return this.runFeedBackFunction();
    }
    else {
      return this.runOpeningGuess();
    }
  }   

showtable(){
    var results ="";
    for(var i=0; this.state.previousGuessesArr.length>i;i++){
     results = results + "<tr>" + "<td>" + i + "</td>" + "<td>" + this.state.previousGuessesArr[i] + "</td>"  + "</tr>";
    }
    return results;
  }

//why cants i put this.previousGuess() in render  what does.bind do ??? 
//the user guess is getting passes but its not getting updated in previous guessArr? previous guess is not running? 


  render() { 
    this.previousGuess.bind(this);
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
              <tbody>
                <tr>
              <th> Guess Number</th>
              <th> Guess Value</th>
            </tr>
             {this.showtable()}
             </tbody>
            </table>
          </div>
          </div>

     </div>
      );
  }
}

export default ScoreTable;