import {View, Text, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Images from '../../Assets/Index';
import styles from './style';

const SignIn = ({navigation}) => {
  const [lockicon, setLockIcon] = useState(false)
  return (
    <ImageBackground source={Images.bg_ic} style={{flex: 1}}>
      <View style={styles.rootContainer}>
        <Text style={styles.headertext}>Welcome to Indus Tour</Text>
        <View style={styles.destxt}>
          <Text style={styles.headerdesc}>
            Use your Mobile Device to booking to
          </Text>
          <Text style={styles.headerdesc}>Industry Visit and Tour package</Text>
        </View>
      </View>

      <View style={{flex:3, backgroundColor:'red', borderRadius:20, padding:20. }}> 

      <Text style={{ fontSize:24, color:'black', margin:10}}>Sign in</Text>
      <Text style={{margin:10}}>New User ? <Text style={{color:'#3498DB'}}>Create an account</Text></Text>

      <TextInput placeholder='Enter e-mail' style={styles.TextInput}/>

      <TextInput placeholder='Enter the Password' style={styles.TextInput}/>

      <Text style={styles.forgotPassword}>
        Forgot Password
      </Text>

      <TouchableOpacity style={styles.LoginButton} onPress={()=> navigation.navigate('TabNavigation')}>
        <Text style={styles.btnText}>
            Login
        </Text>
      </TouchableOpacity>

      <Text style={styles.alreadytext}>Already have an Account</Text>
      <Text style={styles.alreadytext}><Text> <TouchableOpacity><Text>Sign In</Text></TouchableOpacity> or Sign Up</Text></Text>
      
      </View>
    </ImageBackground>
  );
};

export default SignIn;
