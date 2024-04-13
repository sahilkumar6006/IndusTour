import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {Images} from '../../Assets/Images';
import Images from '../../Assets/Index';
import HeaderComponent from '../../Component/HeaderComponent';
import styles from './style';

const ExploreScreen = ({route, navigation}) => {
  const data = route.params;
  console.log('in the explore Screen', data.locations);
  const [visitData, setVisitData] = useState();

  const NatureData = [
    {
      title: 'Hills & Mountains',
      destinations: [
        {
          name: 'Manali',
          state: 'Himachal Pradesh',
          highlights: ['Solang Valley', 'Hidimba Devi Temple'],
          image:
            'https://images.unsplash.com/photo-1579689189009-874f5cac2db5?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.5,
          stayOptions: ['Hotels', 'Resorts', 'Guesthouses'],
          priceRange: '$ - $$$',
        },
        {
          name: 'Darjeeling',
          state: 'West Bengal',
          highlights: ['Tiger Hill', 'Darjeeling Himalayan Railway'],
          image:
            'https://images.unsplash.com/photo-1637737118663-f1a53ee1d5a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.2,
          stayOptions: ['Hotels', 'Homestays', 'Cottages'],
          priceRange: '$ - $$',
        },
        {
          name: 'Ooty',
          state: 'Tamil Nadu',
          highlights: ['Ooty Lake', 'Doddabetta Peak'],
          image:
            'https://images.unsplash.com/photo-1563459802257-2a97df940f11?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.3,
          stayOptions: ['Hotels', 'Resorts', 'Villas'],
          priceRange: '$$ - $$$',
        },
      ],
    },
    {
      title: 'Beaches',
      destinations: [
        {
          name: 'Goa Beaches',
          state: 'Goa',
          highlights: ['Anjuna Beach', 'Calangute Beach'],
          image:
            'https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.5,
          stayOptions: ['Beach resorts', 'Hotels', 'Guesthouses'],
          priceRange: '$$ - $$$',
        },
        {
          name: 'Radhanagar Beach',
          state: 'Andaman and Nicobar Islands',
          highlights: ['White sandy beach', 'Crystal clear waters'],
          image:
            'https://images.unsplash.com/photo-1597058469362-76b94b40d3f3?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.7,
          stayOptions: ['Beach resorts', 'Cottages', 'Tents'],
          priceRange: '$$ - $$$',
        },
      ],
    },
    {
      title: 'Volcanoes',
      destinations: [
        {
          name: 'Barren Island',
          location: 'Andaman and Nicobar Islands',
          highlights: ["India's only active volcano", 'Scuba diving'],
          image: 'https://example.com/barren_island.jpg',
          rating: 4.4,
          stayOptions: ['Resorts'],
          priceRange: '$$ - $$$',
        },
      ],
    },
    {
      title: 'Canyons',
      destinations: [
        {
          name: 'Gandikota',
          state: 'Andhra Pradesh',
          highlights: ['Gandikota Fort', 'Pennar River Gorge'],
          image: 'https://example.com/gandikota.jpg',
          rating: 4.3,
          stayOptions: ['Guesthouses', 'Tents'],
          priceRange: '$ - $$',
        },
      ],
    },
    {
      title: 'Lakes',
      destinations: [
        {
          name: 'Dal Lake',
          state: 'Jammu and Kashmir',
          highlights: ['Houseboats', 'Shikara rides'],
          image: 'https://example.com/dal_lake.jpg',
          rating: 4.6,
          stayOptions: ['Houseboats', 'Hotels', 'Homestays'],
          priceRange: '$$ - $$$',
        },
        {
          name: 'Pangong Tso',
          state: 'Ladakh',
          highlights: ['Changthang Wildlife Sanctuary', 'Camping sites'],
          image: 'https://example.com/pangong_tso.jpg',
          rating: 4.8,
          stayOptions: ['Camping', 'Tents'],
          priceRange: '$ - $$',
        },
      ],
    },
    {
      title: 'Deserts',
      destinations: [
        {
          name: 'Thar Desert',
          state: 'Rajasthan',
          highlights: ['Camel safaris', 'Desert festivals'],
          image: 'https://example.com/thar_desert.jpg',
          rating: 4.4,
          stayOptions: ['Camps', 'Resorts', 'Luxury tents'],
          priceRange: '$$ - $$$',
        },
      ],
    },
  ];

  useEffect(() => {
    const natureData = NatureData.find(
      item => item.title === data.item.category,
    );
    console.log('in the nature Data', natureData.destinations);
    setVisitData(natureData.destinations);
  }, []);

  const renderVisitData = ({item}) => {
    console.log('in the redner VisitData', item);

    return (
      <View style={{marginHorizontal: 8, borderRadius: 18, padding: 5 ,  height:350 , width:200 , marginVertical:14}}>
        <Image
          source={{uri: item.image}}
          style={{
            height: 200,
            width:200,
            resizeMode: 'cover',
            borderStartTopRadius: 18,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginStart: 5,
            color: 'black',
            marginVertical: 5,
          }}>
          <Text style={{fontSize: 14, color: 'black'}}>3/4 Days to Go</Text>
          <Text style={{fontSize: 14, color: 'black', marginStart: 5}}>
            ⭐ {item.rating}
          </Text>
        </View>
        <Text style={{fontSize: 14, color: 'black', marginStart: 5}}>
        {item.name}
        </Text>
        <Text style={{fontSize: 14, color: 'black', marginStart: 5}}>
       {item.state}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width:200,
            marginHorizontal: 10,
            marginVertical: 12,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF3E4D',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            
            
            }}>
            <Text style={{fontSize: 12, color: 'black', marginStart: 5}}>
              Read More
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2475B0',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              padding: 5,
              
           
            }}>
            <Text style={{fontSize: 16, color: 'black', marginStart: 5}}>
              View Package
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderrecentItem = ({item}) => {
    return (
      <View style={{margin: 5, borderRadius: 8, marginVertical: 20}}>
        <ImageBackground
          source={{uri: item.image}}
          style={{
            height: 200,
            width: 200,
            resizeMode: 'cover',
            BorderTopRadius:20
          }}>
          <Text
            style={{
              alignSelf: 'flex-end',
              marginEnd: 8,
              color: 'black',
              fontSize: 16,
              margin: 5,
            }}>
            {' '}
            ⭐{item.rating}
          </Text>
        </ImageBackground>
      </View>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeaderComponent
        image={Images.ic_back}
        title={data.item.category}
        imagenotification={Images.Ic_Bell}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Image
          source={require('../../Assets/Images/Search_ic.png')}
          style={styles.icon}
        />
        <TextInput placeholder="Search" style={styles.input} />
      </View>

      <View style={{marginVertical:8}}>
        <FlatList
          data={visitData}
          keyExtractor={(item, index) => `${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderVisitData}
        />
      </View>

      <Text
        style={{
          color: 'black',
          fontSize: 16,
          marginHorizontal: 24,
          marginVertical: 8,
        }}>
        Recently Viewed
      </Text>
      <View>
      <FlatList
        data={visitData}
        horizontal
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderrecentItem}
      />
      </View>
     
    </ScrollView>
  );
};

export default ExploreScreen;
