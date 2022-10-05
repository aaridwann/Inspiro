import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import InputComponent from '../../Component/Input'

const HomeScreen = () => {
  return (
    <View style={{ width: '100%', minHeight: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ width:'100%', padding:4, height:'8%', backgroundColor:'yellow', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
        <InputComponent width='70%'/>  
      </View>
      <View style={{ width:'100%', height:'37%', backgroundColor:'green' }}/>
      <View style={{ width:'100%', flex:1, backgroundColor:'blue' }}/>
    </View>
  )
}

export default HomeScreen