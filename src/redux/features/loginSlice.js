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
      const response = await api.post("/auth/login", data, {withCredentials:true});
      if (response.status === 200) {
        toast.success("Login successful!", {
          className: 'bg-black text-white'
        });
        return response.data?.data; // Return user data
      }
    } catch (error) {
      console.log(error.response)
      toast.error(error.response?.data?.message || "Login failed!", {
        className: 'bg-black text-white'
      });
      return rejectWithValue(error.response?.data?.message || "Unknown error");
    }
  }
);

export const getLoggedUser = createAsyncThunk("get/currentUser", async () => {
  const response = await api.get("/auth/currentUser", { withCredentials: true })
  console.log(response)
  return response.data?.data
})

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    user: null,
    isSubmitted: false,
    role:'',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleLogin.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.role = action.payload.role
      state.isSubmitted = true
      localStorage.setItem("role", action.payload.role)
      state.error = null;
    });
    
    builder.addCase(handleLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // Store the error message
      state.user = null;
    });
    
    // handle CurrentUser lifeCycle
    builder.addCase(getLoggedUser.fulfilled, (state, action) => {
      state.user = action.payload;
    })

    builder.addCase(getLoggedUser.rejected, (state, action) => {
      state.error = action.error.message
      console.log(action.error)
      state.user = {}
    })
  },
});

export default loginSlice.reducer;
