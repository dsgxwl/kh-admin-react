import { handleActions } from 'redux-actions'


export const activeIndex = handleActions({
    CHANGE_NAV_ACTIVE: (state, action) => {
      console.log(state, action,'asd')
    	return action.payload 
    }
}, 0) 

