import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default styles = StyleSheet.create({
  Img_bg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  rootContainer: {
    backgroundColor: 'white',
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    paddingTop: 50,
  },
  ForgotPassword: {
    fontFamily: 'OpenSans-Bold',
    color: '#000000',
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 6,
  },
  txtDesc: {
    alignSelf: 'center',
    fontFamily: 'OpenSans-Regular',
    marginBottom: 47,
    height: 38,
    color: '#323232',
    fontSize: 14,
  },
  Emailtxt: {
    color: '#000000',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  emailInput: {
    borderBottomWidth: 1,
    marginBottom: 20,
    fontFamily: 'OpenSans-Regular',
    height: 48,
    fontSize: 14,
    borderBottomColor: '#000000',
  },
  submitBtn: {
    backgroundColor: Colors.primary500,
    justifyContent: 'center',
    height: 48,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 120,
  },
  Logintxt: {
    fontSize: 15,
    color: '#FFFFFF',
    fontFamily: 'OpenSans-Bold',
  },
  backbtn: {
    color: '#4B4B4B',
    marginBottom: 40,
    alignSelf: 'flex-end',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },
  LoginTxt: {
    color: '#197BBD',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },
});
