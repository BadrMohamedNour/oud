import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/lib/axios";

// Types
interface LoginResponse {
  data: {
    token?: string;
    user?: {
      id: string;
      email: string;
    };
  };
}

interface ApiError {
  errors?: {
    email?: string;
    password?: string;
    identifier?: string;
  };
  message?: string;
}

interface LoginState {
  loading: boolean;
  apiErrors: ApiError | null;
  isModalVisibleLogin: boolean;
  data: LoginResponse["data"] | null;
}

interface LoginPayload {
  identifier: string;
  password: string;
}

const initialState: LoginState = {
  loading: false,
  apiErrors: null,
  isModalVisibleLogin: false,
  data: null,
};

export const loginThunk = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: ApiError }
>("auth/login", async (payload, { rejectWithValue }) => {
  try {
    const response = await axios.post<LoginResponse>("/login", payload);
    return response.data;
  } catch (error: any) {
    if (error.response?.data) {
      return rejectWithValue(error.response.data as ApiError);
    }
    return rejectWithValue({
      message: "An unexpected error occurred",
    } as ApiError);
  }
});

export const loginSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    setIsModalVisibleLogin: (state, action: { payload: boolean }) => {
      state.isModalVisibleLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.apiErrors = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
        state.apiErrors = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.apiErrors = action.payload || { message: "Unknown error" };
        state.loading = false;
      });
  },
});

export const { setIsModalVisibleLogin } = loginSlice.actions;

export default loginSlice.reducer;
