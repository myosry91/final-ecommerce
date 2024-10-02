import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";

const api = clientApi()

export const fetchCategories = createAsyncThunk("fetch/categories", async () => {
    const response = await api.get("/categories")
    return response.data?.data
})

export const fetchCategory = createAsyncThunk("fetch/category", async (id) => {
    const response = await api.get(`/categories/${id}`)
    return response.data?.data
})

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        isLoading: false,
        categories: [],
        category:{},
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false
            state.categories = action.payload
            state.error = null
        });

        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false
            state.categories = []
            state.error = action.error.message
        });

        // handle category data promise

        builder.addCase(fetchCategory.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.category = action.payload
            state.error = null
        });

        builder.addCase(fetchCategory.rejected, (state, action) => { 
            state.isLoading = false
            state.category = {}
            state.error = action.error.message
        })
    }
})

export default categoriesSlice.reducer