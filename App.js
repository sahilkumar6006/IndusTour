import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigator from './src/Routes/StackNavigator'
import SignUp from './src/Screen/SignUp/Index'
import TabNavigator from './src/Routes/TabNavigator'
import ForgotPassword from './src/Screen/ForgotPassword/ForgotPassword'
import ChatScreen from './src/Screen/ChatScreen'
import Testing from './src/Screen/Testing.js'
import BookingScreen from './src/Screen/BookingScreen/Index.js'
import SlotScreen from './src/Screen/SlotScreen/index.js'
export default function App() {
  return (
  <StackNavigator/>
  // <BookingScreen/>
  // <SlotScreen/>
  // <ChatScreen/>
  // <Testing/>
  )
}

