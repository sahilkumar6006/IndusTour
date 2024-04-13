import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        

    },
    headertext:{
        fontSize:28,
        color:'white',
        fontweight:'bold',
        alignSelf:'center'
       
    },
    headerdesc:{
        color:'white',
      
        fontSize:16
    },
    destxt:{
        alignSelf:'center',
        margin:8,
    },
    TextInput:{
        marginVertical:20,
        borderWidth:0.5,
        borderRadius:10,
        padding:8,
        color:'black'
    },
    LoginButton:{
        backgroundColor:'#008AB5',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        padding:8,
        marginVertical:25
    },
    btnText:{
        
        color:'white',
        fontSize:16,
        fontWeight:'400'
    },
    forgotPassword:{
        alignSelf:'flex-end',
        color:'black',
        fontWeight:'600'
    },
    alreadytext:{
        alignSelf:'center'
    }
})