import React, { Component } from 'react';
import scoreTable from './scoreTable';
import guessInput from './guessInput';
import './overall.css';

//THIS SHOULD BE UTHE HIGHEST LEVE OF THE REACT APP - should show score table which is showing the input guesses? 

class overall extends Component {
  constructor(props){
    this.numberGenerator = this.numberGenerator.bind(this) //asociated the methods of the overall class to the render methods

    //any method needs to be attached to output by using ...any time using the return method in the render method
    //before the return in the render, it is just regular js.....
  }

numberGenerator(){
  var actualNum = Math.floor((Math.random() * 100) + 1);
  return actualNum
}


  render() {
    return (
      <div className = "overallCont">
        <h1> Hot and Cold App </h1>
        <h3> This is guess number (number later) </h3>
        <guessInput /> 
        <scoreTable  actualNum = {numberGenerator()} /> 
      </div>
    );
  }
}

export default overall;
