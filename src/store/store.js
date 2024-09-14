import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";


const store = configureStore({
  reducer: {
    auth: authSlice
    // add for post as well
  },
});

export default store;
