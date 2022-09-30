import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "AuthReducer",
  initialState: { token: "" },
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { storeToken } = slice.actions;

export default slice.reducer;
