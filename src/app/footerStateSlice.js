import { createSlice } from "@reduxjs/toolkit";

export const footerStateSlice = createSlice({
  name: "footer",
  initialState: {
    display: "on",
  },
  reducers: {
    setFooterDisplay: (state, action) => {
      state.display = action.payload;
    },
  },
});
export const { setFooterDisplay } = footerStateSlice.actions;

export default footerStateSlice.reducer;
