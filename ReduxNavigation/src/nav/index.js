import { StackNavigator } from 'react-navigation'
import ScreenA from '../screens/ScreenA'
import ScreenB from '../screens/ScreenB'
import React, { Component } from 'react'
import { connect } from 'react-redux'

const Navigator = StackNavigator({
  Sa: { screen: ScreenA },
  Sb: { screen: ScreenB }
},
{
  initialRouteName: 'Sa'
})

class Nav extends Component {
  render() {
    return(
      <Navigator />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default Nav
/**
 * class Nav extends Component {
  render() {
    return(
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      })}/>
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(Nav)
 */