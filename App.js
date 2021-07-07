import React from 'react'
import { StatusBar } from 'react-native'
import 'react-native-gesture-handler'

import Router from './src/navigation/Router'

import theme from './src/theme/themeStyles'

import { withAuthenticator } from 'aws-amplify-react-native'


//import Entype from 'react-native-vector-icons/Entypo'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      <Router />
    </>
  )
}

export default withAuthenticator(App)
