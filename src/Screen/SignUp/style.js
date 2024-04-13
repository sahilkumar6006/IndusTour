import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../constants/Colors";
const {height, width} = Dimensions.get('screen');
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:24,
    // backgroundColor:'Colors.Grey',
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:Colors.WhiteGreesh
  },
  SignUpText:{
    fontSize:32,
    fontWeight:'bold',
    alignSelf:'center',
    color:Colors.primary500,
  
  },

  inputBox: {
    // width: width - 30,
    borderRadius: 15,
    borderWidth: 1,
    marginVertical: 20,
    padding: 10,
    color:'black',
    borderColor:Colors.primary500,
    
  },
  addButton: {
    backgroundColor: Colors.primary500,
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
})