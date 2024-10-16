import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";

const api = clientApi();

export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  const response = await api.get(`/products/${id}`);  
  return response.data?.data
})

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    product: {},
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => { 
      state.isLoading = true; // Set loading state to true
    })

    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false
      // const {id} = action.meta.arg
      state.product = action.payload || {}; // Product data comes from API
      state.error = null
    });

    builder.addCase(getProduct.rejected, (state, action) => { 
      state.isLoading = false
      state.error = action.error.message
      console.log(action.error.message)
      state.product = {}
    })
  },
});


// Export selectors
export const selectProduct = (state) => state.product;
export const selectLoading = (state) => state.product.isLoading;
export const selectError = (state) => state.product.error;

export default productSlice.reducer;
