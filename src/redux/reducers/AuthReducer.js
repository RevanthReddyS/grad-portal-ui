import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "AuthReducer",
  initialState: { token: "", accountId: "" },
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
    },
    storeAccountId: (state, action) => {
      state.accountId = action.payload;
    },
  },
});
// Storing current question globally and using it
// CSS styling
export const { storeToken, storeAccountId } = slice.actions;

export default slice.reducer;
