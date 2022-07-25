import { createSlice } from "@reduxjs/toolkit";

export const connectWithDataSlice = createSlice({
  name: "aboutMeWriter",
  initialState: {
    title: "제목없음",
    content: "내용없음",
  },
  reducers: {
    tempSaveContents: (state, action) => {
      state.title = action.payload;
      state.content = action.payload;
    },
  },
});
export const { tempSaveContents } = connectWithDataSlice.actions;

export default connectWithDataSlice.reducer;
