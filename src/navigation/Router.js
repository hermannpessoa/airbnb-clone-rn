import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DestinationSearchScreen from '../screens/DestinationScearch'
import GuestScreen from '../screens/Guests'

import HomeTabNavigator from './HomeTabNavigator'

const Stack  = createStackNavigator();

export default Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen 
                    name={"Home"}
                    component={ HomeTabNavigator }
                    options={{
                        headerShown: false
                    }}
                />


                <Stack.Screen 
                    name={"Destination Search"}
                    component={ DestinationSearchScreen }
                    options={{
                        title: 'Search yout destination'
                    }}
                />

                <Stack.Screen 
                    name={"Guests"}
                    component={ GuestScreen }
                    options={{
                        title: 'Who travels with you?'
                    }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}
