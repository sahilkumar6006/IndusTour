import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
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

  rootContainer:{
    flex:1,
    flexDirection:'row',
    // justifyContent:'center',
    backgroundColor:'white',
    // justifyContent:'space-evenly',
    // justifyContent:'space-around',
    alignItems:'center',
    // margin:5,
    padding:8,

  }
})