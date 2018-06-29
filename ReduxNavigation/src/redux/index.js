import { createStore, combineReducers, applyMiddleware } from 'redux'

const defaultCounter = {
  counter: 0
}

import { NavigationActions } from 'react-navigation'
import AppNavigator  from '../nav'
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import { logger } from 'redux-logger'


const navReducer = createNavigationReducer(AppNavigator)

const mathOperatorReducer = function (state = {counter: 0}, action) {
  switch(action.type) {
    case 'INCR_COUNTER':
       let newObj = {
         counter: state.counter++
       }
       return newObj
    default:
       return state
    }
}

const reducer = combineReducers({
  nav: navReducer,
  counter : mathOperatorReducer
})

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
)

export const store = createStore(
  reducer,
  applyMiddleware(middleware, logger)
)