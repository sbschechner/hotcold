import React from 'react';
import ReactDOM from 'react-dom';
import guessInput from './guessInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<guessInput />, div);
});
