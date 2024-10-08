import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";

const api = clientApi();

// Create async thunk to get products
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ size = null, color = null, minPrice = null , maxPrice = null }, { rejectWithValue }) => {
    try {
      let url = "/products"; // Base URL for products
      const params = [];

      if (size) {
        params.push(`size=${size}`);
      }
      if (color) {
        params.push(`color=${color}`);
      }
      if (minPrice) {
        params.push(`minPrice=${minPrice}`);
      }
      if (maxPrice) {
        params.push(`maxPrice=${maxPrice}`);
      }
      // if (Array.isArray(price) && price.length === 2) {
      //   params.push(`minPrice=${price[0]}`);
      //   params.push(`maxPrice=${price[1]}`);
      // }

      if (params.length) {
        url += `?${params.join('&')}`;
      }
      const response = await api.get(url);
      if (response.status === 200) {
        return response.data; // Return products data
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.errors[0]?.msg || "Unknown error");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    products: [], // Store products data
    error: null,
    selectedSize: null, // State to store the selected size
    selectedPriceRange: null, // State to store the selected size
  },
  reducers: {
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload; // Update selected size
    },
    clearSelectedSize: (state) => {
      state.selectedSize = null; // Clear selected size
    },
    setSelectedPriceRange: (state, action) => {
      state.selectedPriceRange = action.payload; // Update selected size
    },
    clearSelectedPriceRange: (state) => {
      state.selectedPriceRange = null; // Clear selected size
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true; // Set loading state to true
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false; // Set loading state to false
      state.products = action.payload; // Store fetched products
      state.error = null; // Clear any previous error
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false; // Set loading state to false
      state.error = action.payload; // Store the error message
      state.products = []; // Clear products on error
    });
  },
});


// Export actions
export const { setSelectedSize, clearSelectedSize, setSelectedPriceRange, clearSelectedPriceRange } = productsSlice.actions;

// Export selectors
export const selectProducts = (state) => state.products.products;
export const selectLoading = (state) => state.products.isLoading;
export const selectError = (state) => state.products.error;

export default productsSlice.reducer;
