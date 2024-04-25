import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Api} from '../../api';

const initialState = {
  products: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const getAllProducts = createAsyncThunk(
  'getALLProducts',
  async thunkApi => {
    try {
      const response = await Api.get('products');
      console.log('in the response', response.data);
      return response.data;
    } catch (error) {
      console.log('in the error');
      return thunkApi.rejectWithValue(error);
    }
  },
);

const ProductsSlice = createSlice({
  name: 'ProductsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // getAllProducts cases
    builder.addCase(getAllProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default ProductsSlice.reducer;
