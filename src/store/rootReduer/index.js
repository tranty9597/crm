/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the Root reducer
 * @author ADAMO
 * @since  10/15/2018
 */
import { combineReducers } from 'redux'

import { user } from '../../topLevelRedux'

const rootReducer = combineReducers({
    user
})

export default rootReducer;