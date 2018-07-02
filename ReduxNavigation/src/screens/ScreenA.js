import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 

class ScreenA extends Component {
  constructor(props) {
    super(props)
    this.state = {apa: 'apa'}
  }
  _onPress = () => {
    this.props.navigation.navigate('Sb', { replace: true, apa: 'apa_data' })
  }

  render(){
     const { onPress, counter, nav } = this.props
      console.log(this.props)
      console.log(this.state)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}} >
        <Button onPress={ (counter == 3) ? this._onPress : onPress } style={{height: 100, width: 200}} title={`${counter}`} color='#C21807'/>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return state.counter
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress: () => {
      dispatch({
        type: 'INCR_COUNTER'
      })
    }        
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenA)
