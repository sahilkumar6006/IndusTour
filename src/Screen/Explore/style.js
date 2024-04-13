import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        // padding:14
    },
    container: {
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
        resizeMode: 'covers',
      },
      headerPlace:{
        fontSize:18,
        marginVertical:12,
        marginHorizontal:14,
        // alignSelf:'center',
        color:'black'

      },
      CardItem:{
        // flex:1,
     maxHeight:200,
        // backgroundColor:'red',
        margin:5,
        alignItems:'center'
        // borderRadius:
      },
      categoryText:{
        margin:5,
        color:'black'
      }
})