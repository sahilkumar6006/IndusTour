import { View, Text, Image, Touchable, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
// import { getCalendarDateString } from 'react-native-calendars/src/services';
// import Calendar from 'react-native-calendars'

import styles from './style';
import Images from '../../Assets/Index'

const BookingScreen = ({navigation}) => {
  // const [showModal, setShowModal] = useState(false);
  return (
    <View style={{flex:1, }}> 
      {/* <Text>Index</Text> */}
      <Image source={{uri: 'https://images.unsplash.com/photo-1565866926760-213f0b57e8b6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} 
      style={{height:200, width:380 , resizeMode: 'cover' , alignSelf: 'center' , borderRadius: 15, marginVertical: 20}}
      />
<View style={{paddingHorizontal:21}}>

      <Text>AES AUTOMOTIVE COMPANY PVT</Text>
      <Text>Industrial   Equipment Supplier</Text>
      <Text>4.0  ⭐⭐⭐⭐⭐</Text>


    <View style={{flexDirection: 'row' , marginVertical:20 , alignItems: 'center' , }}>
      <Image source={Images.ic_location}  style={{height:20, width:20, resizeMode: 'cover', marginEnd:15}}/>
      <Text>D-234, Phase 8B, Industrial Area, Sector 74,</Text>
    </View>
     

     <View style={{flexDirection: 'row' , marginVertical:20 , alignItems: 'center'}}>
      <Image source={Images.ic_phone}  style={{height:20, width:20, resizeMode: 'cover', marginEnd:15}}/>
      <Text>55545468464</Text>
    </View>

    <View style={{flexDirection: 'row' , marginVertical:20 , alignItems: 'center'}}>
      <Image source={Images.ic_phone}  style={{height:20, width:20, resizeMode: 'cover', marginEnd:15}}/>
      <Text>55545468464</Text>
    </View>



    <View style={{flexDirection: 'row' , marginVertical:20 , alignItems: 'center'}}>
      <Image source={Images.ic_phone}  style={{height:20, width:20, resizeMode: 'cover', marginEnd:15}}/>
      <Text>55545468464</Text>
    </View>


    


    <View style={{flexDirection: 'row' , marginVertical:20 , alignItems: 'center'}}>
      <Image source={Images.ic_phone}  style={{height:20, width:20, resizeMode: 'cover', marginEnd:15}}/>
      <Text>55545468464</Text>
    </View>


    

    <View style={{flexDirection: 'row' , marginVertical:20 , alignItems: 'center'}}>
      <Image source={Images.ic_phone}  style={{height:20, width:20, resizeMode: 'cover', marginEnd:15}}/>
      <Text>55545468464</Text>
    </View>
    
<TouchableOpacity style={styles.Loginbtn} onPress={() => navigation.navigate("SlotScreen")} >
                <Text style={styles.Logintxt}>Continue Booking</Text>
              </TouchableOpacity>
</View>

      {/* <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text>Click</Text>
      </TouchableOpacity>


      <Modal  visible={showModal} animationType='fade'>

      <Calendar style={{height:300, with:300}}/>
      </Modal> */}


    </View>
  )
}

export default BookingScreen