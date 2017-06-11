import React, { Component } from 'react';
import GuessInput from './GuessInput';
import './overall.css';

//THIS SHOULD BE UTHE HIGHEST LEVE OF THE REACT APP - should show score table which is showing the input guesses? 

class Overall extends Component {
  render() {
    return (
      <div className = "overallCont">
        <h1> Hot and Cold App </h1>
        <GuessInput /> 
      </div>
    );
  }
}

export default Overall;
