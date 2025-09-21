import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import axiosInstance from "@/lib/axios";

interface RegisterResponse {
  data: [];
  message: string;
  success: boolean;
}

interface ApiError {
  errors?: {
    email: string;
    password: string;
    name: string;
    telephone: string;
  };
  message?: string;
  code?: string;
  status?: number;
}

interface RegisterState {
  loading: boolean;
  apiErrors: ApiError | null;
}

interface RegisterPayload {
  email: string;
  password: string;
  telephone: string;
  name: string;
}

// Helper function for consistent error handling
const handleApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiError>;

    if (axiosError.response?.data) {
      return {
        ...axiosError.response.data,
        status: axiosError.response.status,
      };
    }

    if (axiosError.request) {
      return {
        message: "Network error - please check your connection",
        code: "NETWORK_ERROR",
      };
    }
  }

  return {
    message: "An unexpected error occurred",
    code: "UNKNOWN_ERROR",
  };
};

// Initial state
const initialState: RegisterState = {
  loading: false,
  apiErrors: null,
};

// Async thunks
export const registerThunk = createAsyncThunk<
  RegisterResponse,
  RegisterPayload,
  { rejectValue: ApiError }
>("auth/register", async (payload, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<RegisterResponse>(
      "/register",
      payload
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Slice
export const registerSlice = createSlice({
  name: "auth/register",
  initialState,
  reducers: {
    clearApiErrors: (state) => {
      state.apiErrors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register thunk cases
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.apiErrors = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.apiErrors = null;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.apiErrors = action.payload || {
          message: "Register failed",
          code: "REGISTER_ERROR",
        };
      });
  },
});

// Action creators
export const { clearApiErrors } = registerSlice.actions;

export default registerSlice.reducer;
