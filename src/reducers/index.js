import { combineReducers } from 'redux'
import * as app from './app'
import * as common from './common'
import * as user from './user'
import * as aclog from './aclog'

//redux todo


export default combineReducers({
    ...app,
    ...common,
    ...user,
    ...aclog
})
