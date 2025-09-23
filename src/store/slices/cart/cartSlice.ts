import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import axiosInstance from "@/lib/axios";

// Types
interface CartData {
  access_token: string;
  cart_token: string;
  customer: string;
}

interface CartResponse {
  data: CartData;
}

interface ApiError {
  errors?: {
    product_id?: string;
    packaging_unit_product_id?: string;
    quantity?: string;
    message?: string;
  };
  message?: string;
  code?: string;
  status?: number;
}

interface CartState {
  loading: boolean;
  apiErrors: ApiError | null;
  data: CartData | null;
  productData: any;
}

interface CartPayload {
  product_id: number;
  packaging_unit_product_id?: number;
  quantity: number;
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
const initialState: CartState = {
  loading: false,
  apiErrors: null,
  data: null,
  productData: null,
};

// Async thunks
export const addToCartThunk = createAsyncThunk<
  CartResponse,
  CartPayload,
  { rejectValue: ApiError }
>("cart/addToCart", async (payload, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<CartResponse>(
      "/cart/add",
      payload
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Slice
export const cartSlice = createSlice({
  name: "cart/cart",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.productData = action.payload;
    },
    clearApiErrors: (state) => {
      state.apiErrors = null;
    },
  },
  extraReducers: (builder) => {
    // Add To Cart thunk cases
    builder
      .addCase(addToCartThunk.pending, (state) => {
        state.loading = true;
        state.apiErrors = null;
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.apiErrors = null;
      })
      .addCase(addToCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.apiErrors = action.payload || {
          message: "Login failed",
          code: "LOGIN_ERROR",
        };
      });
  },
});

// Action creators
export const { setProduct, clearApiErrors } = cartSlice.actions;

export default cartSlice.reducer;
