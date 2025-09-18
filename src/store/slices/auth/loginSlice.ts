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
  };
  message?: string;
  code?: string;
  status?: number;
}

interface LoginState {
  loading: boolean;
  apiErrors: ApiError | null;
  isModalVisibleLogin: boolean;
  isModalVisibleMagicLink: boolean;
  magicLinks: MagicLinks | null;
  MagicLinkType: string | undefined;
  data: LoginData | null;
  loginStep: number;
}

interface LoginPayload {
  identifier: string;
  password: string;
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
  isModalVisibleLogin: false,
  isModalVisibleMagicLink: false,
  magicLinks: null,
  MagicLinkType: "email",
  data: null,
  loginStep: 1,
};

// Async thunks
export const loginThunk = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: ApiError }
>("auth/login", async (payload, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<LoginResponse>("/login", payload);
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

export const magicLinkThunk = createAsyncThunk<
  MagicLinksResponse,
  void,
  { rejectValue: ApiError }
>("auth/magicLink", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<MagicLinksResponse>(
      "/magic-links"
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

export const requestOtpThunk = createAsyncThunk<
  OtpPayload,
  { rejectValue: ApiError }
>("auth/otp", async (payload, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post("/otp/request", payload);
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

export const sendOtpThunk = createAsyncThunk<
  OtpResponse,
  { otp: string },
  { rejectValue: ApiError }
>("auth/otp", async (payload, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<OtpResponse>(
      "/otp/request",
      payload
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Slice
export const loginSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    setIsModalVisibleLogin: (state, action: PayloadAction<boolean>) => {
      state.isModalVisibleLogin = action.payload;
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
    clearApiErrors: (state) => {
      state.apiErrors = null;
    },
    resetLoginState: () => initialState,
  },
  extraReducers: (builder) => {
    // Magic Link thunk cases
    builder
      .addCase(magicLinkThunk.pending, (state) => {
        state.loading = true;
        state.apiErrors = null;
      })
      .addCase(magicLinkThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.magicLinks = action.payload.data;
        state.apiErrors = null;
      })
      .addCase(magicLinkThunk.rejected, (state, action) => {
        state.loading = false;
        state.apiErrors = action.payload || {
          message: "Failed to load magic links",
          code: "MAGIC_LINKS_ERROR",
        };
      })

      // Login thunk cases
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.apiErrors = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.apiErrors = null;
        // Close modals on successful login
        state.isModalVisibleLogin = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.apiErrors = action.payload || {
          message: "Login failed",
          code: "LOGIN_ERROR",
        };
      })

      // Request Otp thunk cases
      .addCase(requestOtpThunk.pending, (state) => {
        state.loading = true;
        state.apiErrors = null;
      })
      .addCase(requestOtpThunk.fulfilled, (state) => {
        state.loading = false;
        state.apiErrors = null;
      })
      .addCase(requestOtpThunk.rejected, (state, action) => {
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
  setIsModalVisibleLogin,
  setIsModalVisibleMagicLink,
  setLoginStep,
  clearApiErrors,
  resetLoginState,
} = loginSlice.actions;

// Selectors (optional but helpful)
export const selectLoginLoading = (state: { login: LoginState }) =>
  state.login.loading;
export const selectLoginData = (state: { login: LoginState }) =>
  state.login.data;
export const selectLoginErrors = (state: { login: LoginState }) =>
  state.login.apiErrors;
export const selectMagicLinks = (state: { login: LoginState }) =>
  state.login.magicLinks;
export const selectIsLoginModalVisible = (state: { login: LoginState }) =>
  state.login.isModalVisibleLogin;

export default loginSlice.reducer;
