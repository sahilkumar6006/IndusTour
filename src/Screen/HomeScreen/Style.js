import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        // padding:24
        // backgroundColor:'red'
    },
    userImage:{
        height:50,
        width:50,
    },
   
    innerRootContainer:{
        // flex:1,
        // alignItems:'flex-start',
        justifyContent:'center',
        marginVertical:6,
        paddingHorizontal:14,
        // backgroundColor:'red'
    },
    text:{
        fontSize:18,
        fontWeight:'600',
        color:'black'
        
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        borderWidth: 0.6,
      marginVertical:12,
      marginEnd:24,
        backgroundColor: 'white',
        height: 40,

      },
      input: {
        padding:4,
        color:'black',
        borderRadius: 2,
        flex: 1, 
      },
      icon: {
        margin:10,
        height: 20,
        width: 20,
        resizeMode: 'cover',
      },

      batchesContainter:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10
      },
      elementTextColor:{
        color:Colors.primary500,
        fontWeight:'400',
        fontSize:16
      },
      smallHeadingtxt:{
        color:Colors.black,
        fontWeight:'500',
        fontSize:16
      },
      profileContainer:{
        flexDirection:'row',
        marginVertical:8,
        alignItems:'center',

        justifyContent:'space-between'
      },
      profileInnerContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
      },
      dummy_Profile_ic:{
        height:30,
        width:30,
        borderRadius:15,
        margin:14
      },
      userNameText:{
        color:'black',
        fontSize:24,
        fontWeight:'bold'
      },
      ic_bell:{
        height:30,
        width:30,
        marginEnd:12
      },
    
})