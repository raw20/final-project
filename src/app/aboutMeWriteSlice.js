import { createSlice } from "@reduxjs/toolkit";

export const aboutMeWriteSlice = createSlice({
  name: "aboutMeWriter",
  initialState: {
    title: "제목없음",
    writer: "이름없음",
    content: "내용없음",
    data: [],
    message: "default",
  },
  reducers: {
    tempSaveContents: (state, action) => {
      state.title = action.payload;
      state.writer = action.payload;
      state.content = action.payload;
    },
  },
});
export const { tempSaveContents } = aboutMeWriteSlice.actions;

export default aboutMeWriteSlice.reducer;
