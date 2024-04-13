import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import firebase from '../../firebase/firebaseConfig';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false
};

//login
export const login = createAsyncThunk('auth/login', async(credential,  thunkAPI) => {
  const { email, password } = credential;
  console.log("in the login and password", email,password)
try {
  const response = await firebase.auth().signInWithEmailAndPassword(email, password);
  console.log("resoponse succesfull", response.user)
  

  const getUserData = async() => {
    await AsyncStorage.setItem("userData", JSON.stringify(response.user))
    console.log("Data is stored in the Async Storage")
  }

  getUserData()
   
     const userData = {
      uid: response.user.uid,
      email: response.user.email,
  
    };
    return userData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }

})

export const sendPasswordResetEmail = createAsyncThunk(
  'auth/sendPasswordResetEmail',
  async ({ email }, thunkAPI) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      console.log("login succesfull")
      return { email };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // login cases
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userData = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
})

export default AuthSlice.reducer