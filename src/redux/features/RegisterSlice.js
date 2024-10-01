import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";
import { toast } from "react-toastify";

const api = clientApi();

export const handleRegister = createAsyncThunk(
  "user/register",
  async (data) => {
    try {
      const response = await api.post("/auth/signup", data);
      console.log(response);
      return response.data;
    } catch (error) {
      toast.error(error);
    }
  }
);

const regsterSlice = createSlice({
  name: "register",
  initialState: {
    isLoading: false,
    user: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleRegister.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(handleRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(handleRegister.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.error.message);
      state.error = action.error.message;
      state.user = null;
    });
  },
});

export default regsterSlice.reducer;
