import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productService from './productsService'

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const fetchProductsAsync = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
      try {
        const response = await productService.fetchProducts();
        return response;
      } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
      }
    }
);

export const createProducts = createAsyncThunk(
  'products/createProducts',
  async (productData, thunkAPI) => {
    try {
      const response = await productService.createProducts(productData);
      return response;
    } catch (error) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }
  }
);

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductsAsync.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchProductsAsync.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.products = action.payload
        })
        .addCase(fetchProductsAsync.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(createProducts.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createProducts.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.products.push(action.payload)
      })
      .addCase(createProducts.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
      })
    }
})

export const { reset } = productSlice.actions
export default productSlice.reducer