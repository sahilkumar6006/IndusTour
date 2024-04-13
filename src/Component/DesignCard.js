import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DesignCard = ({title,desc}) => {
  return (
    <View style={styles.rootContainer}> 
    <View>
    <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
     <View>
        {/* <Text>hello</Text> */}
     </View>
    </View>
  )
}

export default DesignCard

const styles = StyleSheet.create({
    rootContainer:{
        // flex:1,
        // margin:5,
        flexDirection:'row',
        height:150,
        width:'90%',
        marginHorizontal:24,
        borderRadius:8,
        backgroundColor: '#008AB5',
    },
    title:{
        // flex:1,
        alignSelf:'center',
        fontSize:24,
        margin:10,
        color:'white'
    },

    desc:{
        margin:10,
        fontSize:14,
        color:'white'
    }
    
})