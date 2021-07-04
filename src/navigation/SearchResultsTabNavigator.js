import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultScreen from '../screens/SearchResults'

import theme from '../theme/themeStyles'

const Tab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: theme.primary,
            indicatorStyle: {
                backgroundColor: theme.primary,
                height: 2,
                borderRadius: 10,
                bottom: -1
            }
        }}>
            <Tab.Screen 
                name={'List'}
                component={SearchResultScreen}
            />
            <Tab.Screen 
                name={'Map'}
                component={SearchResultScreen}
            />
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator