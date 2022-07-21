import { createSlice } from "@reduxjs/toolkit";

export const headerStateSlice = createSlice({
  name: "headerLayout",
  initialState: {
    value: "true",
    opacity: "0",
  },
  reducers: {
    onAndUp: (state, action) => {
      state.value = action.payload;
    },
    connectWith: (state, action) => {
      state.value = action.payload;
    },
    headerGnbOpcity: (state, action) => {
      state.opacity = action.payload;
    },
  },
});
export const { onAndUp, connectWith, headerGnbOpcity } =
  headerStateSlice.actions;

export default headerStateSlice.reducer;
