import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLike = createAsyncThunk('GET_LIKE', async () => {
	try {
		const res = await axios.get(
			'https://my-json-server.typicode.com/raw20/final-project/aboutMeList',
		);
		return res.data;
	} catch (err) {
		console.log(err);
	}
});
export const addLike = createAsyncThunk('ADD_LIKE', async ({ id, like }) => {
	try {
		const res = await axios.put(
			`https://my-json-server.typicode.com/raw20/final-project/aboutMeList/${id}`,
			{
				like: like,
			},
		);
		return { id, like };
	} catch (err) {
		console.log(err);
	}
});
export const deleteLike = createAsyncThunk('DELETE_LIKE', async id => {
	try {
		const res = await axios.delete(
			`https://my-json-server.typicode.com/raw20/final-project/aboutMeList/${id}`,
		);
		return id;
	} catch (err) {
		console.log(err);
	}
});

const detailSlice = createSlice({
	name: 'item',
	initialState: {
		data: [],
		message: 'default',
	},
	extraReducers: builder => {
		builder.addCase(getLike.fulfilled, (state, action) => {
			state.message = '리스트업 완료';
			state.data = action.payload;
		});
		builder.addCase(addLike.fulfilled, (state, action) => {
			state.message = '좋아요 완료';
			const index = state.data.findIndex(ele => ele.id === action.payload.id);
			state.data.splice(index, 1, action.payload);
		});
		builder.addCase(deleteLike.fulfilled, (state, action) => {
			state.message = '좋아요 취소';
			state.data = state.data.filter(ele => ele.id !== action.payload);
		});
	},
});
export default detailSlice.reducer;
