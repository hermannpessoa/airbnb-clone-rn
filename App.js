import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import HomeScreen from './src/screens/Home'
import DestinationSearchScreen from './src/screens/DestinationScearch'

import theme from './src/theme/themeStyles'


//import Entype from 'react-native-vector-icons/Entypo'

export default () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      <SafeAreaView>
          {/* <HomeScreen /> */}
          <DestinationSearchScreen></DestinationSearchScreen>
      </SafeAreaView>
    </>
  )
}
