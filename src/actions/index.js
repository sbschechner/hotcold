export const SHOW_SPLASH = 'SHOW_SPLASH';
export const showSplash = splash => ({
	type: SHOW_SPLASH,
	splash
});


export const USER_GUESS = 'USER_GUESS';
export const userGuess = (guess, previousGuessArr) => ({
	type: USER_GUESS,
	guess,
	previousGuessArr
})

export const ACTUAL_NUM = 'ACTUAL_NUM';
export const actualNum = number => ({
	type: ACTUAL_NUM,
	number
})

