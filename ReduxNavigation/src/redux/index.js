import { createStore, combineReducers, applyMiddleware } from 'redux'

const defaultCounter = {
  counter: 0
}

import { NavigationActions } from 'react-navigation'
import Navigator from '../nav'

// const initialAction = { type: NavigationActions.Init }
// con sole.log('initialACtion:', initialAction)
// const initialState = Navigator.router.getStateForAction(initialAction)

const navReducer = function (state = initialState, action) {
  console.log('prev state:', state)
  let newState = Navigator.router.getStateForAction(action, state)
  console.log('newState:', newState)
  if (action.params && action.params.replace) {
    // In order to replace the previous route
    // we'll remove the item at index - 1 and then decrement the index.

    /**
     * const { index } = newState
    newState.routes.splice(index - 1, 1)
    newState.index--
     */
    
  }
  return newState
}
/*
const mathOperatorReducer = function (state = defaultCounter, action) {
  switch(action.type) {
    case 'INCR_COUNTER':
       let newObj = {
         counter: this.state.counter++
       }
       return newObj
    default:
       return state
    }
}
*/

const reducer = combineReducers({navReducer})

export const store = createStore(
  reducer,
  applyMiddleware(logger)
)