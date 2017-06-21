import * as actions from '../actions';

//initial state - going through my app and listing every time  I touch state - these are the default values? 

const initialState = {
    showSplash : 'true' ,
    userGuess: null,
    actualNum : 0,
    tempNumber : null,
    previousGuessArr : [],
}

export hotReducer = {state=initialState, action} => {


}