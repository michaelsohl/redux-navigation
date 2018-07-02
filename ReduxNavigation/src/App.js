/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import AppNavigator from './nav'
import {
  reduxifyNavigator
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
// import logger from 'redux-logger'
import { store } from './redux'

const NavApp = reduxifyNavigator(AppNavigator, "root")

const mapStateToProps = (state) => ({
  state: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(NavApp)


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}