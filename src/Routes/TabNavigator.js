import { View, Text,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Home from '../Screen/Home/Index'
import Explore from '../Screen/Explore/Index'
import Chat from '../Screen/Chat/Index'
import Colors from '../constants/Colors'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'
// import { Images } from '../Assets/Images'
import Images from '../Assets/Index'
import Profile from '../Screen/ProfileScreen/Index'
import HomeScreen from '../Screen/HomeScreen/Index'

const Tab = createBottomTabNavigator();
const TabNavigator = ({route}) => {
  const isUserLogin = route.params

  return (
   <Tab.Navigator 
  screenOptions={{
    headerShown: false,
  tabBarLabel: '',
    tabBarStyle: {
      backgroundColor: '#008AB5',
      height: 60,
      position:'absolute',
      bottom:16,
      right:16,
      left:16,
      borderRadius:20,
      alignItems:'center',
      padding:10,
      // backgroundColor: Colors.primary500
    }
  }}
>
   <Tab.Screen name='Home' component={HomeScreen} options={{headerShown:false,
  tabBarLabel:'',
  // tabBarBadge: 3 ,
    tabBarIcon: ({ focused }) => {
      return (
        <View>
          <Image
            source={Images.Ic_Home}
            resizeMode="contain"
            style={{ width: 30,  width:30, resizeMode:'contain', tintColor: focused?  'white': 'black'}}
          />
        </View>
      );
    },
  
  }} />


<Tab.Screen name='explore'  component={Explore} options={{headerShown:false,
      tabBarLabel:'',
     tabBarIcon: ({ focused }) => {
      return (
        <View>
          <Image
            source={Images.ic_upcoming}
            resizeMode="contain"
            style={{ width: 30,height:30  , tintColor: focused?  'white': 'black'}}
          />
        </View>
      );
    },
    }} />


<Tab.Screen name='Chat'  component={Chat} options={{headerShown:false,
      tabBarLabel:'',
     tabBarIcon: ({ focused }) => {
      return (
        <View>
          <Image
            source={Images.Chat}
            resizeMode="contain"
            style={{ width: 30,height:30  , tintColor: focused?  'white': 'black'}}
          />
        </View>
      );
    },
    }} />

    <Tab.Screen name='Profile'  component={Profile} options={{headerShown:false,
      tabBarLabel:'',
     tabBarIcon: ({ focused }) => {
      return (
        <View>
          <Image
            source={Images.Ic_Profile}
            resizeMode="contain"
            style={{ width: 30,height:30  , tintColor: focused?  'white': 'black'}}
          />
        </View>
      );
    },
    }} />

   </Tab.Navigator>
  )
}

export default TabNavigator