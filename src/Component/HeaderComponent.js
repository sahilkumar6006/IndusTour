import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Images} from '../Assets/Images';
import Colors from '../constants/Colors';

const HeaderComponent = ({
  image,
  title,
  imagenotification,
  onPress,
  customContainerStyles,
  customImgStyles,
}) => {
  console.log(title);
  return (
    <View style={[styles.rootContainer, customContainerStyles]}>
      <TouchableOpacity onPress={onPress}>
        <Image source={image} style={[styles.image, customImgStyles]} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Image source={imagenotification} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  title: {
    color: 'black',
    fontSize: 18,
  },
  image: {
    height: 20,
    width: 20,
    // backgroundColor:'black',
    resizeMode: 'cover',
    marginStart:12,
  },
});
