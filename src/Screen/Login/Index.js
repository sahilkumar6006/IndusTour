import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import styles from './style';
import auth from '@react-native-firebase/auth';
import Images from '../../Assets/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useTheme } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';

const SignINSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
});

export default Index = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lockicon, setLockIcon] = useState(true);
  const [userdata, setUserData] = useState()
  // const [userData, setUserData]  = useState();
  // const [userData, setUserData] = useState();
  // const [isUserLogin, setIsUserLogin] = useState();

  const handleEmail = (value)=> {
    setEmail(value)
   }
 
   const handlepassword = (value) => {
     setPassword(value)
   }
 
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async values => {
        const {email, password} = values;
        try {
          if (email.length > 0 && password.length > 0) {
            const isUserLogin = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            console.log('in isUserLogin', isUserLogin);
            // setMessage('');
            const setData = async () => {
             await AsyncStorage.setItem('isUserLogin', isUserLogin)
             
             console.log("in the setData",)
            }

            setUserData(setData)
            navigation.navigate('TabNavigator', {
              isUserLogin: isUserLogin,
            });
          } else {
            Alert.alert('please enter the email and password');
          }
        } catch (err) {
          // setMessage(err.message);
          console.log(err);
        }
      }}
      validationSchema={SignINSchema}>
      {({values, handleChange, handleSubmit, errors}) => (
        <ImageBackground
          source={Images.ic_bg}
          blurRadius={5}
          style={styles.majorContainer}>
          <View style={styles.rootContainer}>
            <View style={{marginHorizontal: 24}}>
              <Text style={styles.welcometxt}>Welcome</Text>
              <Text style={styles.continuetxt}>Please continue to login</Text>

              <Text style={styles.Emailtxt}>Email</Text>
              <TextInput
                placeholder="Enter your email"
                style={styles.emailInput}
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <Text style={styles.Passwordtxt}>Password</Text>
              <View style={styles.PasswordContainer}>
                <TextInput
                  placeholder="************"
                  autoCorrect={false}
                  secureTextEntry={lockicon}

                  textContentType="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
                <TouchableOpacity   style={styles.passwrodInput} onPress={()=> 
              setLockIcon((prev) => !prev)}
              // setLockIcon(!lockicon)}
              >
              {
                lockicon? <Image
                source={Images.ic_lock}
                
              />:
              <Image
              source={Images.ic_unlock}
            
            />
              }

            
            </TouchableOpacity>

              </View>
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.ForgotPasswordtxt}>Forgot Password</Text>
              </TouchableOpacity>


              <TouchableOpacity style={styles.Loginbtn} onPress={handleSubmit}>
                <Text style={styles.Logintxt}>Login</Text>
              
                {/* <ActivityIndicator/> */}
              </TouchableOpacity>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginHorizontal: 5,
                }}>
                <Text style={styles.alreadytext}>Already have an Account </Text>
                <Pressable
                  onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.signupText}>SignUp</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ImageBackground>
      )}
    </Formik>
  );
};
