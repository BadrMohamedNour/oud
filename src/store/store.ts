import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/auth/loginSlice";
import authSlice from "./slices/auth/authSlice";
import registerSlice from "./slices/auth/registerSlice";
import forgetPasswordSlice from "./slices/auth/forgetPasswordSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    login: loginSlice,
    register: registerSlice,
    forgetPassword: forgetPasswordSlice,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
