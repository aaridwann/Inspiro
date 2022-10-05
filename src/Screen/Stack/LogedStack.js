import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Home';
const LogStack = createNativeStackNavigator()

const LogedStack = () => {
    return (
        <LogStack.Navigator screenOptions={{ statusBarHidden: true, headerShown: false }}>
            <LogStack.Screen name="Home" component={HomeScreen} />
        </LogStack.Navigator>
    )
}

export default LogedStack