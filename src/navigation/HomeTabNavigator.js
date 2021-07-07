import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import theme from '../theme/themeStyles'

import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import HomeScreen from '../screens/Home'
import ExploreNavigator from './ExploreNavigator'
import ProfileScreen from '../screens/ProfileScreen'
// import PostScreen from '../screens/PostScreen'

const Tab = createBottomTabNavigator();

export default HomeTabNavigator = () => {

    const tabs = [
        {name: 'Explore', icon: `` , component: HomeScreen }
    ]

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: theme.primary,
            labelStyle: {
                fontSize: 12
            },
            style: {
                paddingTop: 8,
                paddingBottom: 8,
                height: 60
            }
        }}>
    
            <Tab.Screen
                name={'Explore'}
                component={ExploreNavigator}
                options={{
                    tabBarIcon: ({color}) => 
                        <Fontisto name={"search"} size={25} color={color} />
                }}
            />

            <Tab.Screen 
                name={'Saved'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => 
                        <FontAwesome name={"heart-o"} size={25} color={color} />
                }}
            />

            <Tab.Screen 
                name={'Airbnb'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => 
                        <FontAwesome5 name={"airbnb"} size={25} color={color} />
                }}
            />

            <Tab.Screen 
                name={'Messages'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => 
                        <Feather name={"message-square"} size={25} color={color} />
                }}
            />

            <Tab.Screen 
                name={'Profile'}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({color}) => 
                        <EvilIcons name={"user"} size={25} color={color} />
                }}
            />
 
        </Tab.Navigator>
    )

}
