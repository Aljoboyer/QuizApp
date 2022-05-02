import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/authSlice";
import TeacherSlice from "../features/TeacherSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    TeacheStore: TeacherSlice
  },
});
