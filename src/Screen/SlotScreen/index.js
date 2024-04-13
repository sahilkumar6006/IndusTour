import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Calendar, CalendarUtils} from 'react-native-calendars';
import Colors from '../../constants/Colors';
import Images from '../../Assets/Index'
import styles from './style';
const SlotScreen = () => {
  return (
    <View style={{marginHorizontal:14}}>
   <Image source={Images.ic_back} style={{height:20, width:20, marginVertical:20}}/>
     
      <Text>AES AUTOMOTIVE COMPANY PVT</Text>
      <Text>Industrial   Equipment Supplier</Text>
      <Text>4.0  ⭐⭐⭐⭐⭐</Text>


      <Text style={{fontSize:16 , color:'black' , marginVertical:8}}>Available Visting  Time and Date</Text>


      <Calendar
      style={{marginHorizontal:24 , borderWidth:1, borderColor:Colors.blueDark, borderRadius:5, marginBottom:6}}
     
      />

<Text style={{fontSize:16}}>These Are The Time Slots Your Visting Time</Text>

<TouchableOpacity style={styles.Loginbtn} >
                <Text style={styles.Logintxt}>Confirm Booking</Text>
              </TouchableOpacity>
   
    </View>
  )
}

export default SlotScreen