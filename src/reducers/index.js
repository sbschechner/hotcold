import * as actions from '../actions';

//initial state - going through my app and listing every time  I touch state - these are the default values? 

const initialState = {
    showSplash : true ,
    userGuess: null,
    actualNum : 0,
    tempNumber : null, // MIGHT NOT NEED TEMP NUMBER
    previousGuessArr : [],
};

export const hotReducer = (state=initialState, action) => {
    if(action.type === actions.SHOW_SPLASH){
        return Object.assign({}, state, {
            showSplash : action.splash
        })
    }

    else if (action.type === actions.ACTUAL_NUM){
        return Object.assign({}, state, {
            actualNum : action.number
        })
    }

    else if (action.type === actions.USER_GUESS){
        return Object.assign({}, state, {
            userGuess : action.guess,
            previousGuessArr : [...action.previousGuessArr, action.guess] 
        })
    }

    return state;
}