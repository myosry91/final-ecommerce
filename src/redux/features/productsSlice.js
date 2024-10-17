import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";

const api = clientApi();

// Create async thunk to get products
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ size , color, minPrice , maxPrice, category }= {}, { rejectWithValue }) => {
    try {
      let url = "/products"; // Base URL for products
      const params = [];

      if (size) {
        params.push(`size=${size}`);
      }
      if (color) {
        params.push(`color=${color}`);
      }
      if (category) {
        params.push(`category=${category}`);
      }
      
      if (minPrice) {
        params.push(`minPrice=${minPrice}`);
      }
      if (maxPrice) {
        params.push(`maxPrice=${maxPrice}`);
      }
      
      if (params.length) {
        url += `?${params.join('&')}`;
      }

      const response = await api.get(url);
      if (response.status === 200) {
        return response.data?.data; // Return products data
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
    selectedSize: null, 
    selectedColor: null, 
    selectedCategory: null, 
    selectedPriceRange: null, 
  },
  reducers: {
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload;
    },
    clearSelectedSize: (state) => {
      state.selectedSize = null; 
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload; 
    },
    clearSelectedColor: (state) => {
      state.selectedColor = null; 
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearSelectedCategory: (state) => {
      state.selectedCategory = null; 
    },
    setSelectedPriceRange: (state, action) => {
      state.selectedPriceRange = action.payload; 
    },
    clearSelectedPriceRange: (state) => {
      state.selectedPriceRange = null; 
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
export const { setSelectedSize, clearSelectedSize, setSelectedPriceRange, clearSelectedPriceRange,setSelectedColor, clearSelectedColor,setSelectedCategory, clearSelectedCategory } = productsSlice.actions;

// Export selectors
export const selectProducts = (state) => state.products.products;
export const selectLoading = (state) => state.products.isLoading;
export const selectError = (state) => state.products.error;

export default productsSlice.reducer;
