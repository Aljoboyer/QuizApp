import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import * as api from "../../Api/Api.js";

export const login = createAsyncThunk(
  "auth/login",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await  api.signIn(formValue);
      toast.success("Login Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const Register = createAsyncThunk(
  "auth/Register",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    console.log('slice', formValue)
    try {
      const response = await api.studentSignup(formValue);
      toast.success("Register Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
      // action.payload("/");
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [Register.pending]: (state, action) => {
      state.loading = true;
    },
    [Register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [Register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    }
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
