import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import { Images } from '../../Assets/Images'
import React, {useState} from 'react';
// import HeaderComponent from '../../Components/HeaderCompon
import styles from './style';
// import Card from '../../Components/Card'
import Card from '../../Component/Card';
import HeaderComponent from '../../Component/HeaderComponent';
// import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'
import Images from '../../Assets/Index';
import Colors from '../../constants/Colors';

const Explore = ({navigation}) => {
  const [tourismData, setTourismData] = useState([
    {
      category: 'Beaches',
      isSelected: false,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      locations: [
        {
          name: 'Whitehaven Beach',
          description:
            'Whitehaven Beach is known for its crystal white sands and turquoise blue waters, located in the heart of the Great Barrier Reef.',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
          activities: [
            {name: 'Snorkeling', provider: 'Aqua Adventures'},
            {name: 'Helicopter Tour', provider: 'Sky High Tours'},
          ],
        },
        {
          name: 'Navagio Beach',
          description:
            'Navagio Beach, also known as Shipwreck Beach, is an exposed cove on the coast of Zakynthos, in the Ionian Islands of Greece.',
          image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b',
          activities: [
            {name: 'Base Jumping', provider: 'Adrenaline Rush Ltd.'},
            {name: 'Boat Tours', provider: 'Blue Seas Tours'},
          ],
        },
        // Add more beach locations here
      ],
    },
    {
      category: 'Hills & Mountains',
      isSelected: false,
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      locations: [
        {
          name: 'The Alps',
          description:
            'The Alps are the highest and most extensive mountain range system that lies entirely in Europe.',
          image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
          activities: [
            {name: 'Skiing', provider: 'Winter Wonderland'},
            {name: 'Mountain Climbing', provider: 'Peak Performers'},
          ],
        },
        {
          name: 'The Himalayas',
          description:
            'The Himalayas, or Himalaya, form a mountain range in Asia separating the plains of the Indian subcontinent from the Tibetan Plateau.',
          image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
          activities: [
            {name: 'Trekking', provider: 'Adventure Trails'},
            {name: 'Yoga Retreats', provider: 'Serenity Now'},
          ],
        },
        // Add more mountain locations here
      ],
    },
    {
      category: 'Volcanoes',
      isSelected: false,
      image:
        'https://media.istockphoto.com/id/1328526991/photo/fagradalsfjall-volcano-erupting.jpg?s=2048x2048&w=is&k=20&c=bxRk8JyfoSsz5B8Houjpmd9ebFDPjRMyfDvE-zPBUfQ=',
      locations: [
        {
          name: 'Mount Fuji',
          description:
            'Mount Fuji, located on Honshu Island, is the highest mountain in Japan.',
          image: 'https://images.unsplash.com/photo-1518826384131-8b167eb4b5ac',
          activities: [
            {name: 'Hiking', provider: 'Fuji Adventures'},
            {name: 'Cultural Tours', provider: 'Fuji Heritage Tours'},
          ],
        },
        // Add more volcano locations here
      ],
    },
    {
      category: 'Canyons',
      isSelected: false,
      image:
        'https://plus.unsplash.com/premium_photo-1700392110711-bb5fb55b2e67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      locations: [
        {
          name: 'Grand Canyon',
          description:
            'The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States.',
          image: 'https://images.unsplash.com/photo-1584370611566-df1c82a5e87e',
          activities: [
            {name: 'Rafting', provider: 'Canyon Adventures'},
            {name: 'Hiking', provider: 'Grand Trails'},
          ],
        },
        // Add more canyon locations here
      ],
    },
    {
      category: 'Lakes',
      isSelected: false,
      image:
        'https://media.istockphoto.com/id/1630845379/photo/a-crystal-clear-alpine-lakes-laghi-dorsirora-during-a-beautiful-autumn-day-in-the-mountainous.jpg?s=2048x2048&w=is&k=20&c=3Ec3-w7LS1uzZ0ts8c7afHQ1eySjByxnWdKnE9oL830=',
      locations: [
        {
          name: 'Lake Louise',
          description:
            'Lake Louise is a glacial lake within Banff National Park in Alberta, Canada.',
          image: 'https://images.unsplash.com/photo-1495940265112-2d55fccab471',
          activities: [
            {name: 'Canoeing', provider: 'Paddle Paradise'},
            {name: 'Hiking', provider: 'Lake Trails'},
          ],
        },
        // Add more lake locations here
      ],
    },
    {
      category: 'Deserts',
      isSelected: false,
      image:
        'https://media.istockphoto.com/id/1024816978/photo/master-in-desert.jpg?s=2048x2048&w=is&k=20&c=8fVKe5P92GTQZrJGc4AYJIX8zmrZXdtqO8tHcFcwVh0=',
      locations: [
        {
          name: 'Sahara Desert',
          description:
            'The Sahara Desert is the largest hot desert in the world, covering most of North Africa.',
          image: 'https://images.unsplash.com/photo-1543321136-79c5e007b3d5',
          activities: [
            {name: 'Camel Trekking', provider: 'Desert Expeditions'},
            {name: 'Sandboarding', provider: 'Dune Adventures'},
          ],
        },
        // Add more desert locations here
      ],
    },
    // Add more categories as needed
  ]);

  const popularPlaces = [
    {
      name: 'Eiffel Tower',
      image:
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.8,
    },
    {
      name: 'Statue of Liberty',
      image:
        'https://images.unsplash.com/photo-1503572327579-b5c6afe5c5c5?q=80&w=1342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
    },
    {
      name: 'Machu Picchu',
      image:
        'https://plus.unsplash.com/premium_photo-1694542947673-9e1c61387343?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
    },
    {
      name: 'Taj Mahal',
      image:
        'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
    },
    {
      name: 'Great Wall of China',
      image:
        'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
    },
  ];

  const renderPopularItem = ({item, index}) => {
    return (
      <TouchableOpacity>
        <View style={{height: 300, width: 250,marginHorizontal:6}}>
          <Image
            source={{uri: item.image}}
            style={{
              height: 300,
              width: 250,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              resizeMode: 'cover',
            }}
          />
          <Text style={{margin: 5, color: 'black', alignSelf: 'center'}}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const tapOnexplore = (item, index) => {
    console.log('in the tapOne explore', item);
    navigation.navigate('ExploreScreen', {
      item: item,
    });
  };

  const renderTourItem = ({item, index}) => {
    console.log('in the renderTourItem', item);
    return (
      <TouchableOpacity onPress={() => tapOnexplore(item, index)}>
        <View style={styles.CardItem}>
          <Image
            source={{uri: item.image}}
            style={{height: 70, width: 70, borderRadius: 50}}
          />
          <Text style={{margin: 5, color: 'black'}}>{item.category}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.rootContainer}>
      {/* <HeaderComponent
        image={Images.demoUser}
        title="Hi Joseph!"
        imagenotification={Images.IC_BELL}
        customContainerStyles={{
          backgroundColor: Colors.WhiteGreesh,
        }}
        customImgStyles={{
          height: 40,
          width: 40,
          resizeMode: 'cover',
        }}
      /> */}

      <View style={styles.container}>
        <Image
          source={require('../../Assets/Images/Search_ic.png')}
          style={styles.icon}
        />
        <TextInput placeholder="Find Your Place " style={styles.input} />
      </View>
      <Text style={styles.headerPlace}>Hill Station</Text>
      <View>
        <FlatList
          data={tourismData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderTourItem}
        />
      </View>

      <View>
        <Text style={styles.headerPlace}>Popular Places</Text>
      </View>

      <FlatList
        data={popularPlaces}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderPopularItem}
      />
    </View>
  );
};

export default Explore;
