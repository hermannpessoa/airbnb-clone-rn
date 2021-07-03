import React from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'

import HomeScreen from './src/screens/Home'
import Post from './src/components/Post'

import theme from './src/theme/themeStyles'
import feed from './assets/data/feed'

//import Entype from 'react-native-vector-icons/Entypo'

export default () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      <SafeAreaView>
        <ScrollView>
          <HomeScreen />

          {
            /* feed list */
            feed.map((item, k) =>
              <Post key={k} data={item} />)
          }
        </ScrollView>

      </SafeAreaView>
    </>
  )
}
