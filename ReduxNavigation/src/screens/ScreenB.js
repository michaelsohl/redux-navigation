import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class ScreenB extends Component {
  render() {
    console.log('ScreenB')
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'grey'}}>
        <Button style={{height: 100, width: 200}}  onPress={() => {}} title='button' color='#C21807'/>
      </View>
    )
  }
}