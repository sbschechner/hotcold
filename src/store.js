import {createStore} from 'redux'

import {hotReducer} from './reducers';

export default createStore(hotReducer);