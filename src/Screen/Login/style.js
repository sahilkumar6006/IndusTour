import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export default styles = StyleSheet.create({
  Img_bg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  majorContainer: {
    flex: 1,
    padding: 14,
    justifyContent: 'center',
    // backgroundColor: Colors.primary500,
  },
  rootContainer: {
  borderRadius:20,

    // flex:2,

    // justifyContent:'flex-end',
    backgroundColor: 'white',
    padding: 24,
  },
  welcometxt: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#000000',
    //   fontWeight: '600',
    marginBottom: 10,
    fontFamily: 'OpenSans-Bold',
  },
  continuetxt: {
    alignSelf: 'center',
    marginBottom: 20,
    color: '#323232',
    fontFamily: 'OpenSans-Regular',
  },
  Emailtxt: {
    color: '#000000',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  emailInput: {
    borderBottomWidth: 0.3,
    marginBottom: 30,
    height: 48,
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  PasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'white',
    marginBottom: 20,
  },
  Passwordtxt: {
    marginBottom: 10,
    color: '#000000',
    color: '#000000',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  passwrodInput: {
    height: 20,
    borderBottomWidth: 0.3,
    width: 20,
    position: 'absolute',
    right: 20,
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    // borderBottomColor:'red'
  },
  ForgotPasswordtxt: {
    marginBottom: 80,
    alignSelf: 'flex-end',
    color: '#197BBD',
  },
  Loginbtn: {
    backgroundColor: Colors.primary500,
    justifyContent: 'center',
    height: 48,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 50,
  },
  Logintxt: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
  PasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth:0.2,
    borderColor:'black'

  },
  signupText:{
    color:Colors.primary500,
  }
});
