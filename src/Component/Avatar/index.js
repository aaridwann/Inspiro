import { View, Text, Image } from 'react-native'
import React from 'react'
let img = 'https://i.pinimg.com/564x/c4/9e/16/c49e167954ec7917b1ac922bed3e62ca.jpg'


export default function Avatar({size=20}) {
  return (
    <View style={{width:size,height:size, overflow:'hidden', backgroundColor:'red', borderRadius:50}}>
        <Image source={{uri:'https://i.pinimg.com/564x/54/ca/41/54ca4136f0d6d96934420845034b317e.jpg'}} style={{width:'100%', height:'100%'}} />
    </View>
  )
}