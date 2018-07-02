import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class ScreenB extends Component {
  render() {
    const { counter } = this.props
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'grey'}}>
        <Button style={{height: 100, width: 200}}  onPress={() => {}} title='button' color='#C21807'/>
        <Text> { counter } </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return state.counter
}

export default connect(mapStateToProps)(ScreenB)
