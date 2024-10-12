import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";

const api = clientApi()

export const fetchBrands = createAsyncThunk("product/brand", async () => {
    const { data } = await api.get("/brands")
    return data?.data
})

const brandsSlice = createSlice({
    name: "brands",
    initialState: {
        isLoading: false,
        brands: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBrands.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchBrands.fulfilled, (state, action) => {
            state.isLoading = false
            state.brands = action.payload
            state.error = null
        });
        builder.addCase(fetchBrands.rejected, (state, action) => { 
            state.isLoading = false
            state.error = action.error.message
            state.brands = []
        })
    }
})

export default brandsSlice.reducer