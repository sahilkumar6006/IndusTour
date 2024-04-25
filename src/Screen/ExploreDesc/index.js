import { View, Text , Image, Touchable, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import styles from './style'
import Images from '../../Assets/Index';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const data = [
  {
    image: "https://images.unsplash.com/photo-1583393283466-9c45c336cb9c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Day 1: Cochin",
    desc: "Explore the vibrant city of Cochin and its rich cultural heritage."
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1697729435209-97772693b7da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Day 2: Bangalore",
    desc: "Visit the tech hub of India, Bangalore, and explore its bustling streets and vibrant nightlife."
  },
  {
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Day 3: Mumbai",
    desc: "Experience the fast-paced life of Mumbai, India's financial capital, and explore its iconic landmarks."
  },
]

const renderDataItem = ({item}) => {
console.log("in the item", item)
return(
  <View style={{marginVertical:7}}>
    <Image source={{uri: item.image}}  style={{height:150, marginHorizontal:8 , borderRadius:10, resizeMode:'cover'}}/>
    <Text style={{marginStart:8, marginVertical:10 , fontWeight: '600' , color: 'black'}}>{item.title}</Text>

    <Text style={{marginStart:8, fontSize:14}}>{item.desc}</Text>
  </View>
)
}
const ExploreDesc = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headercontainer}>
        <TouchableOpacity>
        <Image source={Images.ic_back} style={styles.ic_back}/>
        </TouchableOpacity>
        <Text style={{color: 'white'}}>Destination Covered</Text>
        <View style={{marginEnd:20}}>
          <Text style={{color: 'white'}}>Munar : 2 Nights</Text>
          <Text style={{color: 'white'}}>Coachin: 1 Nights</Text>
        </View>

      
      </View>
      <FlatList
          data={data}
          keyExtractor={(item,index) => `${index}`}
          renderItem={renderDataItem}
          />

    </View>
  )
}

export default ExploreDesc