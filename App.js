import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homepage from './src/screens/Homepage'
import Sizes from './src/constants/Sizes'
const App = () => {
  return (
   <SafeAreaView style={{borderWidth:0,width:Sizes.fullWidth,height:Sizes.fullHeight}}>
      <Homepage/>
   </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})