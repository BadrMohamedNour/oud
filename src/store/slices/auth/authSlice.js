import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  checkUser: false,
  firstLoad: false,
  data: [],
  users: [],
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFirstLoad: (state, action) => {
      state.firstLoad = action.payload;
    },

    setCheckUser: (state, action) => {
      state.checkUser = action.payload;
    },
  },
  // extraReducers: {
  //     [HYDRATE]: (state, action) => {

  //         if (!action.payload.counter.data.length) {
  //             return state;
  //         }
  //         state.data = action.payload.counter.data;
  //     },

  //     [getCity.pending]: (state) => {
  //         state.loading = true
  //     },
  //     [getCity.fulfilled]: (state, action) => {
  //         state.data = action.payload.data
  //         state.loading = false
  //     },
  // }
});

// Action creators are generated for each case reducer function
export const { setCheckUser, setFirstLoad } = authSlice.actions;

export default authSlice.reducer;
