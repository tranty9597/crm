import { createStore, applyMiddleware } from 'redux'

import rootReduer from './rootReduer';

import thunk from 'redux-thunk'

export default createStore(rootReduer, applyMiddleware(thunk))
