import {View, Text, ImageBackground, TextInput, Touchable, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import Images from '../../Assets/Index'

const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState('');
    const handleEmail = (value) => {
  
        setEmail(value)
    }
  return (
    <ImageBackground source={Images.ic_bg} style={styles.Img_bg} blurRadius={1}>
      <View style={styles.rootContainer}>
        <View style={{marginHorizontal:29}}>
        <Text style={styles.ForgotPassword}>Forgot Password</Text>
        <Text style={styles.txtDesc}>
          Please enter the email address you’d like your password reset
          information sent to.
        </Text>
        <Text style={styles.Emailtxt}>Email</Text>
        <TextInput placeholder="Enter your email" style={styles.emailInput} value={email} onChangeText={handleEmail} />

        <Text style={styles.backbtn}>Back to <Text style={styles.LoginTxt} onPress={()=> navigation.navigate("Login")}>Login</Text></Text>

        <TouchableOpacity style={styles.submitBtn} onPress={()=> console.warn(email)}>
            <Text style={styles.Logintxt}>SUBMIT</Text>
          </TouchableOpacity>
      </View>
        </View>
     
    </ImageBackground>
  );
};

export default ForgotPassword;
