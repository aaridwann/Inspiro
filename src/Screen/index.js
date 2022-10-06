import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogedStack from './Stack/LogedStack';
import { MainContext } from '../Context/MainContext';
import GetLocation from '../Utils/GetLocation';
import { View } from 'react-native';
import GetLocationService from '../Utils/GetLocation/index2';
const Stack = createNativeStackNavigator();

function Screen() {
    const { valueContext, dispatch } = useContext(MainContext)
    useEffect(() => {
        // GetLocation()
        // GetLocationService()
    },[])

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen options={{ headerShown: false }} name="Loged" component={LogedStack} />
                </Stack.Navigator>
            </NavigationContainer>
            {/* {valueContext.message &&
                <View style={{ width: '100%', height: 200, backgroundColor: 'white', position: 'absolute', top: 20, zIndex: 500 }} />
            } */}
        </>
    )
}

export default Screen