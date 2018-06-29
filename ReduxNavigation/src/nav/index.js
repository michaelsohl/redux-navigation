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

/** 
export default class Nav extends Component {
  render() {
    console.log('navigator state:', this.props.state)
    return(
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      })}/>
    )
  }
}
*/