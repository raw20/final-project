import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLike = createAsyncThunk("GET_LIKE", async () => {
  try {
    const res = await axios.get(
      "https://my-json-server.typicode.com/raw20/final-project/aboutMeList"
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const addLike = createAsyncThunk(
  "ADD_LIKE",
  async ({
    id,
    writer,
    title,
    date,
    category,
    content_text,
    content_img,
    file,
    like,
    views,
  }) => {
    try {
      const res = await axios.put(
        `https://my-json-server.typicode.com/raw20/final-project/aboutMeList/${id}`,
        {
          like: like,
        }
      );
      return {
        id,
        writer,
        title,
        date,
        category,
        content_text,
        content_img,
        file,
        like,
        views,
      };
    } catch (err) {
      console.log(err);
    }
  }
);
export const countView = createAsyncThunk(
  "COUNT_VIEW",
  async ({
    id,
    writer,
    title,
    date,
    category,
    content_text,
    content_img,
    file,
    like,
    views,
  }) => {
    try {
      const res = await axios.put(
        `https://my-json-server.typicode.com/raw20/final-project/aboutMeList/${id}`,
        {
          views: (views += 1),
        }
      );
      return {
        id,
        writer,
        title,
        date,
        category,
        content_text,
        content_img,
        file,
        like,
        views,
      };
    } catch (err) {
      console.log(err);
    }
  }
);
export const addAboutMeTableData = createAsyncThunk(
  "ADD_ABOUTME_DATA",
  async (aboutMeList) => {
    try {
      const res = await axios.post(
        `https://my-json-server.typicode.com/raw20/final-project/aboutMeList`,
        aboutMeList
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);
const detailSlice = createSlice({
  name: "item",
  initialState: {
    data: [],
    message: "default",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLike.fulfilled, (state, action) => {
      state.message = "???????????? ??????";
      state.data = action.payload;
    });
    builder.addCase(addAboutMeTableData.fulfilled, (state, action) => {
      state.message = "???????????? ?????? ??????";
      state.data.push(action.payload);
    });
    builder.addCase(addLike.fulfilled, (state, action) => {
      state.message = "????????? ??????";
      const index = state.data.findIndex((ele) => ele.id === action.payload.id);
      state.data.splice(index, 1, action.payload);
    });
    builder.addCase(countView.fulfilled, (state, action) => {
      state.message = "????????? ????????? ??????";
      const index = state.data.findIndex((ele) => ele.id === action.payload.id);
      state.data.splice(index, 1, action.payload);
    });
  },
});
export default detailSlice.reducer;
