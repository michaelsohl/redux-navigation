import { createStackNavigator, addNavigationHelpers } from 'react-navigation'
import ScreenA from '../screens/ScreenA'
import ScreenB from '../screens/ScreenB'
import React, { Component } from 'react'

export default createStackNavigator({
  Sa: { screen: ScreenA },
  Sb: { screen: ScreenB }
},
{
  initialRouteName: 'Sa'
})
