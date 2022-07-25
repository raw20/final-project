import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLike = createAsyncThunk("GET_LIKE", async () => {
  try {
    const res = await axios.get(
      "https://my-json-server.typicode.com/raw20/final-project/boardData"
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
export const addLike = createAsyncThunk("ADD_LIKE", async (newList) => {
  try {
    const res = await axios.get(
      "https://my-json-server.typicode.com/raw20/final-project/boardData",
      newList
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
export const deleteLike = createAsyncThunk("DELETE_LIKE", async (id) => {
  try {
    const res = await axios.get(
      `https://my-json-server.typicode.com/raw20/final-project/boardData${id}`
    );
    return id;
  } catch (err) {
    console.log(err);
  }
});

export const detailSlice = createSlice({
  name: "item",
  initialState: {
    likes: 0,
    data: [],
  },
  reducers: {
    clickLike: (state, action) => {
      state.likes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLike.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(addLike.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(deleteLike.fulfilled, (state, action) => {
      state.data = state.data.filter((ele) => ele.id !== action.payload);
    });
  },
});
export const { clickLike } = detailSlice.actions;
export default detailSlice.reducer;
