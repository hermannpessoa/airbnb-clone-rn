import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home'
import SearchResultsTabNavigator from '../navigation/SearchResultsTabNavigator'

const Stack = createStackNavigator();

const ExploreNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Welcome'}
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name={'Search Results'}
                component={SearchResultsTabNavigator}
                options={{
                    title: 'Search yout destination'
                }}
            />
        </Stack.Navigator>
    )
}

export default ExploreNavigator;
