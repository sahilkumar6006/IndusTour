import { View, Text, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import Images from '../../../Assets/Index'
import styles from '../OnBoard1/style'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = ({navigation}) => {
  // useEffect(() => {
  //   let getItem = AsyncStorage.getItem(isUserLogin)
  //   console.log("in the useEffect ", getItem)

  //   getItem && navigation.navigate("TabNavigation")
  // }, [])
  return (

    <ImageBackground
    source={Images.bg_ic}
    resizeMode='cover'
  
    style={styles.imgBackground}
    blurRadius={5}
    >
<View style={styles.rootContainer}>
      <Text style={styles.header}> Discover industry,</Text>
      <Text style={styles.header}> Explore Innovation</Text>
      <View>
      </View>
    <Text style={styles.desc}>
      Industrial Visit provide real-world context, fostering pratical understanding enhancing theoretical knowledge, and bridging the gap between academia and industry.
    </Text>

    <TouchableOpacity style={styles.nextbtn} onPress={() => navigation.navigate('Login')} >
        <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>

    
    </View>
    </ImageBackground>
    
  )
}

export default Index