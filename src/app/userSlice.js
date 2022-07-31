import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk("GET_LIKE", async () => {
  try {
    const res = await axios.get("/db/userData.json");
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    pw: "",
    name: "",
    number: "",
    data: [],
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    userSearch: (state, action) => {
      state.name = action.payload;
      state.number = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.message = "유저 리스트업 완료";
      state.data = action.payload;
    });
  },
});

export const { login, logout, userSearch } = userSlice.actions;

export default userSlice.reducer;
