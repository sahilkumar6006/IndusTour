import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../../Component/HeaderComponent';
import Images from '../../Assets/Index';


const EditProfile = ({navigation}) => {
  const tapOnBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.rootContainer}>
      <HeaderComponent
        image={Images.ic_back}
        title={'Edit Profile'}
        imagenotification={Images.Ic_Bell}
        onPress={tapOnBack}
      />
      <Image source={Images.demoUser} style={styles.profile_pic} />

      <View style={styles.innerContainer}>
        <Text style={styles.name}>Full Name</Text>
        <TextInput placeholder="Joseph kahn" style={styles.TextInput} />

        <Text style={styles.name}>Email</Text>
        <TextInput placeholder="Joseph kahn" style={styles.TextInput} />

        <Text style={styles.name}>Phone number</Text>
        <TextInput placeholder="7845692148 " style={styles.TextInput} />

        <Text style={styles.name}>Password</Text>
        <TextInput placeholder="************** " style={styles.TextInput} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Save Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // padding:18
    // paddingHorizontal:14
    // backgroundColor:'red'
  },
  innerContainer: {
    marginHorizontal: 24,
    marginVertical: 20,
  },
  profile_pic: {
    margin: 20,
    height: 100,
    width: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  name: {
    marginHorizontal: 12,
  },
  TextInput: {
    // margin:5,
    marginVertical: 12,
    height: 30,
    padding: 4,
    color: 'grey',
    marginHorizontal: 14,
    borderWidth: 0.6,
    padding: 4,
    borderRadius: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    backgroundColor: '#3498DB',
    padding: 8,
    marginHorizontal: 24,
    marginVertical: 20,
    borderRadius: 20,
    // flex:1
  },
  text: {
    color: 'white',
    fontSize: 14,
    // fontWeight:'bold'
  },
});
export default EditProfile;
