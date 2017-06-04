import React from 'react';
import ReactDOM from 'react-dom';
import overall from './overall';
import registerServiceWorker from './registerServiceWorker';
import './index.css'

ReactDOM.render(<overall />, document.getElementById('root'));
registerServiceWorker();
