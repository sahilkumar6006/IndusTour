import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    backgroundColor:Colors.WhiteGreesh
  },
  headerComp:{
    flexDirection:'row',
    backgroundColor:Colors.primary500,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:8,
    paddingVertical:8
  },
  ic_back:{
    marginHorizontal:13,
    height:30,
    width:20,
    resizeMode:'contain'
  },
  chat_ic:{
    height:30,
    width:30,
    borderRadius:15,
  resizeMode:'cover'  
}, 
chatname:{
  flex:1,
  marginHorizontal:16
},
ic_more:{
  height:20,
width:30,
resizeMode:'contain'}
})