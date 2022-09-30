import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";

const store = configureStore({
  reducer: {
    authToken: AuthReducer,
  },
});

export default store;
