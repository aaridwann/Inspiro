import React from 'react'
import Provider from '../Context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import LogedStack from './Stack/LogedStack';
const Stack = createNativeStackNavigator();

function Screen() {
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen options={{headerShown:false}} name="Loged" component={LogedStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default Screen