import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API} from '../../api';
import axios from 'axios';

const initialState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

// login
export const login = createAsyncThunk('login', async (params, thunkApi) => {
  console.log('🚀 ~ file: AuthSlice.js:12 ~ login ~ params:', params);
  const { username, password } = params;
  console.log("in the login auth", username, password);
  
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', params);
    console.log('🚀 ~ file: AuthSlice.js:16 ~ login ~ response:', response);
    return response.data;
  } catch (error) {
    console.log('🚀 ~ file: AuthSlice.js:16 ~ login ~ error:', error);
   // Return a serializable error message
  }
});
// signup

// confirmSignup

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
});

export default AuthSlice.reducer;