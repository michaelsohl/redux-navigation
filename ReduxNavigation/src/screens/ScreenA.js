import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class ScreenA extends Component {
  
  onPress = () => {
    console.log('SA button press')
    this.props.navigation.navigate('Sb', { replace: true })
  }

  componentDidMount () {
    console.log('Sa did mount')
  }

  render(){
    console.log('ScreenA')
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}} >
        <Button onPress={ this.onPress } style={{height: 100, width: 200}} title='button' color='#C21807'/>
      </View>
    )
  }
}