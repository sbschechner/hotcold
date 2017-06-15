import React, { Component } from 'react';
import GuessInput from './GuessInput';
import './overall.css';

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
