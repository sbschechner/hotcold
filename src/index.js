import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Overall from './components/Overall';
import registerServiceWorker from './components/registerServiceWorker';
import store from './store';
import './index.css'

ReactDOM.render(
	<Provider store = {store}>
		<Overall />
	</Provider> , document.getElementById('root'));
registerServiceWorker();
