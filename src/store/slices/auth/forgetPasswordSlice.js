import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const sendEmailCheck = createAsyncThunk(
  "forgetPassword/step1/sendEmailCheck",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.post("/forgotpassword", payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const checkToken = createAsyncThunk(
  "forgetPassword/step1/checkToken",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.post("/checkConfirmationToken", payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "forgetPassword/step1/resetPassword",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.post("/change_password", payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isModalVisibleForget: false,
  current: 1,
  checkEmailMessage: false,
  apiErrorsStep1: [],
  loading: false,
};

export const forgetPasswordSlice = createSlice({
  name: "auth/forgetPassword",
  initialState,
  reducers: {
    setIsModalVisibleForget: (state, action) => {
      state.isModalVisibleForget = action.payload;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.isModalVisibleForget = true;
      state.current = 2;
    },
    setCheckEmailMessage: (state, action) => {
      state.checkEmailMessage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendEmailCheck.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendEmailCheck.fulfilled, (state) => {
        state.apiSuccesCheckEmail = action?.payload;
        state.loading = false;
        state.checkEmailMessage = true;
      })
      .addCase(sendEmailCheck.rejected, (state) => {
        state.apiErrorsStep1 = action.payload;
        state.loading = false;
      });
  },
});

export const {
  setCurrent,
  setCurrentPage,
  setIsModalVisibleForget,
  setCheckEmailMessage,
} = forgetPasswordSlice.actions;

export default forgetPasswordSlice.reducer;
