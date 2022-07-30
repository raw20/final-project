import { createSlice } from "@reduxjs/toolkit";

export const searchTableSlice = createSlice({
  name: "table",
  initialState: {
    AboutMeData: [],
    QnAData: [],
  },
  reducers: {
    searchData: (state, action) => {
      state.AboutMeData = action.payload;
    },
  },
});

export const { searchData } = searchTableSlice.actions;

export default searchTableSlice.reducer;
