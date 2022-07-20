import { createSlice } from "@reduxjs/toolkit";

export const headerStateSlice = createSlice({
  name: "headerLayout",
  initialState: {
    value: "h1",
  },
  reducers: {
    onAndUp: (state, action) => {
      state.value = action.payload;
    },
    connectWith: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { onAndUp, connectWith } = headerStateSlice.actions;

export default headerStateSlice.reducer;
