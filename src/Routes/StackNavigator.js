import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import DetailComponent from '../Screen/Detail/DetailComponent';
import Splash1 from '../Screen/SplashScreens/OnBoard1/Index'
import onBoard2 from '../Screen/SplashScreens/onBoard2/Index';
import LoginForm from '../Screen/Login/Index';
import Splash3 from '../Screen/SplashScreens/onBoard3/Index';
import SignUp from '../Screen/SignUp/Index'
import Explore from '../Screen/Explore/Index';
import ExploreScreen from '../Screen/ExploreScreen/Index';
import ForgotPassword from '../Screen/ForgotPassword/ForgotPassword';
import TabNavigator from './TabNavigator';
import EditProfile from '../Screen/EditProfileScreen/Index';
import IndustriesScreen from '../Screen/IndustriesScreen/Index';
import ChatScreen from '../Screen/ChatScreen';

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name='onBoard1' component={Splash1} options={{headerShown:false}}/>
        <Stack.Screen name='onBoard2' component={onBoard2} options={{headerShown:false}} />
        <Stack.Screen name='Login' component={LoginForm}  options={{headerShown:false}}/>
        <Stack.Screen name='Splash3' component={Splash3} options={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name='Explore' component={Explore} options={{headerShown: false}}/>
        <Stack.Screen name='DetailComponent' component={DetailComponent} options={{headerShown: false}} />
        <Stack.Screen name='ExploreScreen'  component={ExploreScreen} options={{headerShown: false}} /> 
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}  options={{headerShown: false}}/>
          <Stack.Screen name='TabNavigator' component={TabNavigator} options={{headerShown:false}} />
        <Stack.Screen name='EditProfile' component={EditProfile} options={{headerShown:false}} />
        <Stack.Screen name='IndustriesScreen' component={IndustriesScreen} options={{headerShown:false}} />
        <Stack.Screen name='ChatScreen' component={ChatScreen}  options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

