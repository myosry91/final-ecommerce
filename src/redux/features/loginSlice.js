import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientApi from "../../services/api/clientApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const api = clientApi();
// Handle login request
export const handleLogin = createAsyncThunk(
  "login/user",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", data);
      if (response.status === 200) {
        toast.success("Login successful!", {
          className: 'bg-black text-white'
        });
        return response.data; // Return user data
      }
    } catch (error) {
      toast.error(error.response?.data?.errors[0]?.msg || "Login failed!", {
        className: 'bg-black text-white'
      });
      return rejectWithValue(error.response?.data?.errors[0]?.msg || "Unknown error");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload; // Store user data
      state.error = null;
    });
    builder.addCase(handleLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // Store the error message
      state.user = null;
    });
  },
});

export default loginSlice.reducer;
