import React, { Component } from 'react';
import GuessInput from './GuessInput';
import './overall.css';
import {showSplash} from '../actions'


class Overall extends Component {
  showSplash(splash) {
    this.props.dispatch(showSplash(splash)); // HOW DO I MAKE THIS FALSE?
  }

    constructor(props){
    super(props);
    this.state = {
        showSplash : true,
        };

this.changeSplash = this.changeSplash.bind(this)
  }

changeSplash(){
  this.setState({showSplash : false})
}


 splash(){ //should run the conditional formatting 
    if(this.state.showSplash === true){
      return (
      <div className="splashPage">
        <h1>Hot and Cold Game</h1>
        <button id="playBut" onClick={this.changeSplash}> Play</button>
      </div>
      )
    }

    else { //
     return( 
      <div className = "overallCont">
        <h1> Hot and Cold App </h1>
        <GuessInput /> 
      </div>
      )
    }
  } 



  render() {
    return (
      <div className= "splashDecider" >
        {this.splash()}  
      </div>
    );
  }
}

const mapStateToProps = state => ({
  splash : state.splash
})

export default Overall;
