import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {Profiler} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import HeaderComponent from '../../Components/HeaderComponent';
import HeaderComponent from '../../Component/HeaderComponent';
import auth from '@react-native-firebase/auth';

import Images from '../../Assets/Index';

export default function Profile({navigation}) {
  const data = [
    {title: 'Edit Profile', icon: Images.ic_edit_blue},
    {title: 'Booking Detail', icon: Images.ic_lock_blue},
    {title: 'User Management', icon: Images.ic_terms},
    {title: 'invite Friend', icon: Images.ic_privacy},
    {title: 'Logout', icon: Images.ic_contact_us},
    // {title: 'Delete Account', icon: Images.ic_delete_account},

    // {title: 'Edit Profile',icon:Images.ic_edit_blue },
  ];

  const tapOnprofile = (index, item) => {
    // console.log("tap on profile", item)

    switch (item.title) {
      case 'Edit Profile':
        navigation.navigate('EditProfile');
        // console.warn("in the Edit Profile")
        break;
      case 'Booking Detail':
        console.log('in the Booking Detail');
        break;
      case 'User Management':
        console.log('user Management');
        break;
      case 'invite Friend':
        console.log('invite friend');
        break;
      case 'Logout':
        console.log('in the logout');
    }
  };

  const renderProfileItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => tapOnprofile(index, item)}
        style={styles.profiletextContainer}>
        <Image source={item.icon} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <HeaderComponent
        image={Images.ic_back}
        title={' Profile'}
        imagenotification={Images.ic_bell}
      />
      <Image source={Images.sahiluser} style={styles.profile_pic} />

      <View style={styles.userDetails}>
        <Text style={{fontSize:14, color:'black'}}>{auth().currentUser.displayName}</Text>
        <Text style={{fontSize:14, color:'black'}}>{auth().currentUser.email}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderProfileItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profile_pic: {
    borderRadius:50,
    margin: 20,
    height: 100,
    width: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  userDetails: {
    alignItems: 'center',
    padding: 10,
  },
  profiletextContainer: {
    // backgroundColor:'red',
    padding: 14,
    borderRadius: 8,
    marginHorizontal: 14,
    marginVertical: 3,
    // justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 30,
    width: 30,
    margin: 10,
  },
  title: {
    fontSize: 14,
    color: '#000000',
  },
});
