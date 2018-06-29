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
} from 'react-native';
import Navigator from './nav'

import { Provider } from 'react-redux'
import logger from 'redux-logger'
// import { store } from './redux'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Navigator />
    )
  }
}
/**
 *   <Provider store={store}>
        <Navigator />
      </Provider>
 */