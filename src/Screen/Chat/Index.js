import {View, Text, Image, TextInput, FlatList, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import HeaderComponent from '../../Component/HeaderComponent';
import styles from './style';
import Images from '../../Assets/Index';

const Chat = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(ChatData);

  const ChatData = [
    {
      title: 'Infosys',
      location: 'Mohali, Punjab',
      image: 'https://etimg.etb2bimg.com/photo/102615877.cms',
      rating: 4.6,
    },
    {
      title: 'Tata Consultancy Services',
      location: 'Mohali, Punjab',
      image: 'https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook',
      rating: 4.8,
    },
    {
      title: 'IBM',
      location: 'Chandigarh, Punjab',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1024px-IBM_logo.svg.png',
      rating: 4.6,
    },
    {
      title: 'Infosys',
      location: 'Mohali, Punjab',
      image: 'https://etimg.etb2bimg.com/photo/102615877.cms',
      rating: 4.6,
    },
    {
      title: 'Tata Consultancy Services',
      location: 'Mohali, Punjab',
      image: 'https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook',
      rating: 4.8,
    },
    {
      title: 'IBM',
      location: 'Chandigarh, Punjab',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1024px-IBM_logo.svg.png',
      rating: 4.6,
    },
  ];

  const SearchData = (text) => {
    setSearch(text);

    const filterdata = ChatData.filter((item) => (item.title.toLowerCase()).includes(text.toLowerCase()));

    setFilteredData(filterdata);
  };

  const renderChatsData = ({item}) => {
    return(
      <TouchableOpacity style={styles.rootContainer} onPress={() => navigation.navigate("ChatScreen")}>
        <Image source={{uri: item.image}} style={{height: 40, width: 40, borderRadius: 15, resizeMode: 'cover', marginHorizontal: 10}} />
        <View style={{marginHorizontal: 5, marginVertical: 2, flex: 1}}>
          <Text>{item.title}</Text>
          <Text>Hi</Text>
        </View>
        <TouchableOpacity style={{}}>
          <Image source={Images.Chat} style={{height: 30, width: 30, resizeMode: 'contain', marginEnd: 20}} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <HeaderComponent
        image={Images.ic_back}
        title={' Chat'}
        imagenotification={Images.ic_bell}
      />

      <View style={styles.container}>
        <Image
          source={require('../../Assets/Images/Search_ic.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="Search "
          value={search}
          onChangeText={SearchData}
          style={styles.input}
        />
      </View>
     
      <FlatList 
        data={search !== '' ? filteredData : ChatData}
        keyExtractor={(item, index) => `${index}`} 
        renderItem={renderChatsData}
      />
    </View>
  );
};

export default Chat;
