/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the store intances
 * @author ADAMO
 * @since  10/15/2018
 */
import { createStore, applyMiddleware } from 'redux'

import rootReduer from './rootReduer';

import thunk from 'redux-thunk'

export default createStore(rootReduer, applyMiddleware(thunk))
