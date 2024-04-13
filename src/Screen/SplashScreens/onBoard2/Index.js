import { View, Text, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Images from '../../../Assets/Index'
import styles from '../OnBoard1/style'

const Index = ({navigation}) => {
  return (

    <ImageBackground
    source={Images.ic_bg_2}
    resizeMode='cover'
  
    style={styles.imgBackground}
    blurRadius={2}
    >
<View style={styles.rootContainer}>
      <Text style={styles.header}> Exploring Innovation,</Text>
      <Text style={styles.header}> Unveiling Progress</Text>
      <View>
      </View>
    <Text style={styles.desc}>
        Embaark on an Unforgettable journey by venturing outside of your comfort zone. The World is full of hidden gems just waiting to be discovered.
    </Text>

    <TouchableOpacity style={styles.nextbtn} onPress={() => navigation.navigate("Splash3")}>
        <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>

    
    </View>
    </ImageBackground>
    
  )
}

export default Index