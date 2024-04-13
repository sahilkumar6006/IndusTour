import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Alert, ImageBackground } from 'react-native';
import auth  from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import { useState } from 'react';
import styles from './style'
import Images from '../../Assets/Index'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useFormik } from 'formik';

const SignINSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
});
export default Index = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [name, setName] = useState();

  const handleSignup = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = await auth().currentUser;

      await user.updateProfile({
        displayName:name
      })

      await firestore().collection('users').add({
        id: userCredential.user.uid,
        name: name,
        email: email,
      });

      console.log("User signed up successfully:", userCredential.user);
    } catch (err) {
      setMessage(err.message);
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: SignINSchema,
    onSubmit: (values, actions) => {
      handleSignup(values.name, values.email, values.password);
      actions.setSubmitting(false);
    },
  });
  return (
    
    <ImageBackground source={Images.ic_bg}  blurRadius={4} style={{flex:1}}>
      <StatusBar hidden={true} />

     
      <View style={styles.container}>
        <View style={{backgroundColor:'white' , padding:20, borderRadius:20}}>
        <Text style={styles.SignUpText}>SignUp</Text>
        <Text> Name</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter the name"
          value={name}
          onChangeText={value => setName(value)}
  
        />
        <Text>Enter Your Email</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />

        <Text>Enter Your Password</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Your Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleSignup()}>
          <Text style={{color: '#fff'}}>Signup</Text>
        </TouchableOpacity>

        
        <Text>{message}</Text>
        </View>
    
      </View>
    </ImageBackground>
  );
};



