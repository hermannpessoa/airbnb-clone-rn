import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import 'react-native-gesture-handler'

import Router from './src/navigation/Router'

import theme from './src/theme/themeStyles'


//import Entype from 'react-native-vector-icons/Entypo'

export default () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      <Router />
    </>
  )
}
