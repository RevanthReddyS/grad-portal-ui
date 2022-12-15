import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import ProfileReducer from "./reducers/ProfileReducer";

const store = configureStore({
  reducer: {
    authToken: AuthReducer,
    profileReducer: ProfileReducer,
  },
});

export default store;
