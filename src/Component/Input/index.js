import { View, Text } from 'react-native'
import React from 'react'

export default function InputComponent({width='100%'}) {
  return (
    <View style={{ width:width, height:'100%', backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
      <Text>InputComponent</Text>
    </View>
  )
}