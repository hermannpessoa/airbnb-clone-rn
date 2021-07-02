import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import HomeScreen from './src/screens/Home'

//import Entype from 'react-native-vector-icons/Entypo'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"}/>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  )
}

export default App
