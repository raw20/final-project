import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    pw: "",
    name: "",
    number: "",
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    userSearch: (state, action) => {
      state.name = action.payload;
      state.number = action.payload;
    },
  },
});

export const { login, logout, userSearch } = userSlice.actions;

export default userSlice.reducer;
