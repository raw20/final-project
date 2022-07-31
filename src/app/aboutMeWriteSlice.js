import { createSlice } from "@reduxjs/toolkit";

export const aboutMeWriteSlice = createSlice({
  name: "aboutMeWriter",
  initialState: {
    title: "제목없음",
    name: "제목없음",
    content: "내용없음",
  },
  reducers: {
    tempSaveContents: (state, action) => {
      state.title = action.payload;
      state.name = action.payload;
      state.content = action.payload;
    },
  },
});
export const { tempSaveContents } = aboutMeWriteSlice.actions;

export default aboutMeWriteSlice.reducer;
