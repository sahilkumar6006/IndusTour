import { View, Text, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import Images from '../../../Assets/Index'
import styles from './style'

const Index = ({navigation}) => {

  useEffect(() => {
    const getItem = async() => {
      
    }
  }, [])
  return (

    <ImageBackground
    source={Images.ic_aer}
    resizeMode='cover'
  
    style={styles.imgBackground}
    blurRadius={8}
    >
<View style={styles.rootContainer}>
      <Text style={styles.header}> Explore, Learn,</Text>
      <Text style={styles.header}> Innovate</Text>
      <View>
      </View>
    <Text style={styles.desc}>Indus Tour App with interact with industry experts,
        fostering pratical knowledge and bridging the 
        between classroom learning and professional applications.
    </Text>

    <TouchableOpacity style={styles.nextbtn} onPress={() => navigation.navigate("onBoard2")}>
        <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>

    <Pressable android_ripple={{color:'white'}} onPress={() => navigation.navigate("Login")}>

    <Text style={styles.SkipButton} >Skip</Text>
    </Pressable>
    </View>
    </ImageBackground>
    
  )
}

export default Index