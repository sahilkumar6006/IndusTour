import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  headercontainer: {
    marginVertical:8,
   height:50,
   marginHorizontal:8,
   borderRadius:8,
   backgroundColor: Colors.primary500,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems:'center'
  },
  ic_back:{
    marginStart:10,
    
    color:Colors.Grey,
    height:20,
    width:20
  }
})