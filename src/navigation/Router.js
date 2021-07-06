import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DestinationSearchScreen from '../screens/DestinationScearch'
import GuestScreen from '../screens/Guests'

import HomeTabNavigator from './HomeTabNavigator'
import PostScreen from '../screens/PostScreen'

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

                <Stack.Screen 
                    name={"Post"}
                    component={ PostScreen }
                    options={{
                        title: 'Accomodation'
                    }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}
