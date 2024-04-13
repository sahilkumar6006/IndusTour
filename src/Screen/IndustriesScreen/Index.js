import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
// import { Images } from '../../Assets/Images';
import Images from '../../Assets/Index';
// import { TextInput } from 'react-native-paper';
// import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const IndustriesScreen = ({route, navigation}) => {
  const Data = route.params;
  console.log('in the industries Screen', Data.item.title);

  const [industriesData, SetIndustriesData] = useState();
  const Industries = [
    {
      title: 'Artificial Intelligence',
      industries: [
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
            title: 'Tech Mahindra',
            location: 'Mohali, Punjab',
            image: 'https://media.glassdoor.com/sql/15422/tech-mahindra-squarelogo-1580345877805.png',
            rating: 4.5,
          },
          {
            title: 'HCL Technologies',
            location: 'Kharar, Punjab',
            image: 'https://www.hcltech.com/sites/all/themes/hcltech/images/hcl.png',
            rating: 4.4,
          },
          {
            title: 'Wipro',
            location: 'Mohali, Punjab',
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Wipro_Logo.svg/1200px-Wipro_Logo.svg.png',
            rating: 4.3,
          },
          {
            title: 'Accenture',
            location: 'Mohali, Punjab',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Accenture.svg/1200px-Accenture.svg.png',
            rating: 4.7,
          },
          {
            title: 'Capgemini',
            location: 'Mohali, Punjab',
            image: 'https://www.capgemini.com/wp-content/themes/capgeminitheme/images/capgemini-logo-100x100.png',
            rating: 4.5,
          },
          {
            title: 'IBM',
            location: 'Chandigarh, Punjab',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1024px-IBM_logo.svg.png',
            rating: 4.6,
          },
          {
            title: 'Infosys',
            location: 'Chandigarh, Punjab',
            image: 'https://etimg.etb2bimg.com/photo/102615877.cms',
            rating: 4.4,
          },
          {
            title: 'Tata Consultancy Services',
            location: 'Chandigarh, Punjab',
            image: 'https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook',
            rating: 4.7,
          },
          {
            title: 'Wipro',
            location: 'Chandigarh, Punjab',
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Wipro_Logo.svg/1200px-Wipro_Logo.svg.png',
            rating: 4.5,
          },
      ],
    },
    {
      title: 'Software Engineering',
      industries: [
        {
          title: 'Quark',
          location: 'Chandigarh, Punjab',
          image: 'https://example.com/quark_image.jpg',
          rating: 4.3,
        },
        {
          title: 'Tech Mahindra',
          location: 'Chandigarh, Punjab',
          image: 'https://example.com/tech_mahindra_image.jpg',
          rating: 4.1,
        },
      ],
    },
    {
      title: 'Data Science',
      industries: [
        {
          title: 'Zapbuild',
          location: 'Mohali, Punjab',
          image: 'https://example.com/zapbuild_image.jpg',
          rating: 4.2,
        },
      ],
    },
    {
      title: 'Database Systems',
      industries: [
        {
          title: 'Netsmartz',
          location: 'Chandigarh, Punjab',
          image: 'https://example.com/netsmartz_image.jpg',
          rating: 4.5,
        },
      ],
    },
    {
      title: 'databaseSystems',
      industries: [
        {
          title: 'Mobylogix',
          location: 'Mohali, Punjab',
          image: 'https://example.com/mobylogix_image.jpg',
          rating: 4.4,
        },
      ],
    },
    {
      title: 'Computer Networks',
      industries: [
        {
          title: 'IDS Infotech',
          location: 'Mohali, Punjab',
          image: 'https://example.com/ids_infotech_image.jpg',
          rating: 4.0,
        },
      ],
    },
  ];

  useEffect(() => {
    console.log('in the useEffect');
    // const IndustriesItem = Industries.find((item) => item.title === item.item.title  )
    //         const IndustriesItem =  Industries.find((item) =>  item.title === item.item.title )
    //         console.log("in the useEffect we are having the ", IndustriesItem)


    const IndustriesItem = Industries.find((item)=>  item.title === Data.item.title);
    console.log("item in the industries item", IndustriesItem.industries)
    SetIndustriesData(IndustriesItem.industries)

  }, []);


  const renderIndustriesData = ({item}) => {
    console.log("in the Industries", item)
    return(
        <TouchableOpacity  style={styles.ChatContainer} onPress={() => navigation.navigate("ChatScreen", {
          item: item
        })}>
            <Image source={{uri: item.image}} style={styles.chatImage}/>
            <View>
            <Text>{item.title} </Text>
            <Text>Industrial Equipment Supplier</Text>

            </View>
            
            <TouchableOpacity  onPress={() => navigation.navigate("ChatScreen", {
              item: item
            })}>
            <Image source={Images.ic_chat_2}  style={{height:20, width:20 , resizeMode: 'cover'}}/>
            </TouchableOpacity>
        </TouchableOpacity>
    )
  }

  return (
    <View>
      <Text style={{fontSize:18, alignSelf:'center', color:'black', margin:8}}>Industries</Text>
      <View style={{alignItems:'center', flexDirection:'row', marginStart:14}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>

      <Image source={Images.ic_back} style={{height:20, width:20, resizeMode: 'cover'}} />
        </TouchableOpacity>
      <View style={styles.container}>
       
        <Image
          source={require('../../Assets/Images/Search_ic.png')}
          style={styles.icon}
        />
        <TextInput placeholder="Search" style={styles.input} />
      </View>
      </View>

     
      <FlatList 
      data={industriesData}
      keyExtractor={(item,index) => `${index}`}
      renderItem={renderIndustriesData}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    // marginVertical:5,
    marginHorizontal:20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0.8,
  marginVertical:12,
    backgroundColor: 'white',
    height: 40,

  },
input: {
    padding:4,
    color:'black',
    // borderWidth: 0.5,
    borderRadius: 2,
    flex: 1, // This makes the TextInput component take up the entire available width
  },
  icon: {
    margin:10,
    height: 20,
    width: 20,
    resizeMode : 'cover'},
    ChatContainer:{
        flexDirection:'row',
        backgroundColor:'#EDE9E4',
        margin:5,
        padding:8,
        alignItems:'center',
        justifyContent:'space-around'
    },
    chatImage: {height:50, width:50, resizeMode:'cover' , borderRadius:50 , marginHorizontal:5}
})

export default IndustriesScreen;
