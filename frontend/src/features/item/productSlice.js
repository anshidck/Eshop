import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from './productService';

const initialState = {
  product: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ''
}


export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId, thunkAPI) => {
    try {
      const response = await productService.getProductById(productId);
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


// Product slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProductById.pending, (state) => {
      state.isLoading = true
  })
  .addCase(fetchProductById.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.product = (action.payload)
  })
  .addCase(fetchProductById.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
  })
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
