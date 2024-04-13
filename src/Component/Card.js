import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'


export default function Card({item, index, onPress}) {
    // console.log("In the Card Item elelme", item)
  return (
    <TouchableOpacity onPress={onPress}>
             <View style={styles.rootContainer}>
              {/* <Text style={{fontSize:32, color:'black'}}>{item.name}</Text> */}
        <Image source={{uri: item?.image}} style={{height:190, width:150 , borderRadius:8 , resizeMode:'cover'}}  />
        <Text style={styles.Text}>{item?.title}</Text>
  
    </View>
    </TouchableOpacity>
   
  )
}

const styles = StyleSheet.create({
    rootContainer:{
      height:250, 
      width:150,
        marginVertical:16,
        borderRadius:8,
        marginHorizontal:8,
        flexWrap:'wrap'
    },
    Text:{
        flex:1,
        alignSelf:'center',
        color:'black',
        fontSize:14,
        marginVertical:10
    }
})