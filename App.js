import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import HomeScreen from './src/screens/Home'
import GuestScreen from './src/screens/Guests'

import theme from './src/theme/themeStyles'


//import Entype from 'react-native-vector-icons/Entypo'

export default () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      <SafeAreaView>
          {/* <HomeScreen /> */}
          <GuestScreen></GuestScreen>
      </SafeAreaView>
    </>
  )
}
