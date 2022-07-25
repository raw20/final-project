import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
  name: "item",
  initialState: {
    index: "",
    likes: 0,
  },
  reducers: {
    clickLike: (state, action) => {
      state.likes = action.payload;
    },
    checkIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});
export const { clickLike, checkIndex } = detailSlice.actions;
export default detailSlice.reducer;
