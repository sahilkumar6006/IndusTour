import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React from 'react';
import {Calendar, CalendarUtils} from 'react-native-calendars';
import Colors from '../../constants/Colors';
import Images from '../../Assets/Index';
import styles from './style';
const SlotScreen = ({navigation}) => {
  const data = [
    {
      Time: '9-10',
    },
    {
      Time: '10-11',
    },
    {
      Time: '11-12',
    },
    {
      Time: '12-1',
    },
    {
      Time: '1-2',
    },
    {
      Time: '2-3',
    },
  ];

  const renderTimeSlot = ({item}) => {
    console.log('in the rendTime Slot', item);
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          marginHorizontal: 8,
          padding: 9,
          marginVertical: 10,
          borderRadius: 8,
          color: '#FFFFFFF',
        }}>
        <Text>{item.Time}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{marginHorizontal: 14}}>
      <Image
        source={Images.ic_back}
        style={{height: 20, width: 20, marginVertical: 20}}
      />

      <Text>AES AUTOMOTIVE COMPANY PVT</Text>
      <Text>Industrial Equipment Supplier</Text>
      <Text>4.0 ⭐⭐⭐⭐⭐</Text>

      <Text style={{fontSize: 16, color: 'black', marginVertical: 8}}>
        Available Visting Time and Date
      </Text>

      <Calendar
        style={{
          marginHorizontal: 24,
          borderWidth: 1,
          borderColor: Colors.blueDark,
          borderRadius: 5,
          marginBottom: 6,
        }}
      />

      <Text style={{fontSize: 16}}>
        These Are The Time Slots Your Visting Time
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item, index) => {
          '$index';
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderTimeSlot}
      />

      <View>
        <Text>Bookings Per Slots</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between' , alignItems: 'center'}}>
          <View>
            <TextInput placeholder="00" />
          </View>

          <View style={{marginEnd: 10}}> 
          <Text>Price Per Slot</Text>
           <TextInput placeholder='22' />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.Loginbtn}>
        <Text style={styles.Logintxt}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SlotScreen;
