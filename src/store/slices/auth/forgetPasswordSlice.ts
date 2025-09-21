import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import axiosInstance from "@/lib/axios";

// Types
interface Customer {
  id: string;
  email: string;
}

interface LoginData {
  access_token: string;
  cart_token: string;
  customer: Customer;
}

interface LoginResponse {
  data: LoginData;
}

interface MagicLinks {
  email: { enabled: boolean };
  telephone: { enabled: boolean };
  whatsapp: { enabled: boolean };
}

interface MagicLinksResponse {
  data: {
    email: {
      enabled: boolean;
    };
    telephone: {
      enabled: boolean;
    };
    whatsapp: {
      enabled: boolean;
    };
  };
}

interface OtpData {
  token: string;
  cart_token: string;
  update_customer: boolean;
}

interface OtpResponse {
  data: OtpData;
}

interface ApiError {
  errors?: {
    email?: string;
    password?: string;
    identifier?: string;
    otp?: string;
    message?: string;
  };
  message?: string;
  code?: string;
  status?: number;
}

interface LoginState {
  loading: boolean;
  apiErrors: ApiError | null;
  isModalVisibleForget: boolean;
  isModalVisibleMagicLink: boolean;
  magicLinks: MagicLinks | null;
  MagicLinkType: string | undefined;
  recipient: string;
  countryCode: string;
  data: LoginData | null;
  loginStep: number;
}

interface forgetPasswordPayload {
  email: string;
}

interface OtpPayload {
  type: string | undefined;
  country_code: string;
  recipient: string;
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
const initialState: LoginState = {
  loading: false,
  apiErrors: null,
  isModalVisibleForget: false,
  isModalVisibleMagicLink: false,
  magicLinks: null,
  MagicLinkType: "email",
  recipient: "",
  countryCode: "",
  data: null,
  loginStep: 1,
};

// Async thunks
export const forgetPasswordThunk = createAsyncThunk<
  LoginResponse,
  forgetPasswordPayload,
  { rejectValue: ApiError }
>("auth/forgot-password", async (payload, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      "/forgot-password",
      payload
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Slice
export const forgetPasswordSlice = createSlice({
  name: "auth/forgot-password",
  initialState,
  reducers: {
    setIsModalVisibleForget: (state, action: PayloadAction<boolean>) => {
      state.isModalVisibleForget = action.payload;
    },
    setIsModalVisibleMagicLink: (
      state,
      action: PayloadAction<{ status: boolean; type?: string }>
    ) => {
      state.isModalVisibleMagicLink = action.payload.status;
      state.MagicLinkType = action.payload.type;
    },
    setLoginStep: (state, action) => {
      state.loginStep = action.payload;
    },
    setRecipient: (state, action) => {
      state.recipient = action.payload.recipient;
      state.countryCode = action.payload.countryCode;
    },
    clearApiErrors: (state) => {
      state.apiErrors = null;
    },
    resetLoginState: () => initialState,
  },
  extraReducers: (builder) => {
    // Magic Link thunk cases
    builder
      // Login thunk cases
      .addCase(forgetPasswordThunk.pending, (state) => {
        state.loading = true;
        state.apiErrors = null;
      })
      .addCase(forgetPasswordThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.apiErrors = null;
        // Close modals on successful login
        state.isModalVisibleForget = false;
      })
      .addCase(forgetPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.apiErrors = action.payload || {
          message: "Login failed",
          code: "LOGIN_ERROR",
        };
      });
  },
});

// Action creators
export const {
  setIsModalVisibleForget,
  setIsModalVisibleMagicLink,
  setLoginStep,
  setRecipient,
  clearApiErrors,
  resetLoginState,
} = forgetPasswordSlice.actions;

export default forgetPasswordSlice.reducer;
