import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface TodoProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const initialState = {
  data: []
};

export const getTodoData = createAsyncThunk("todo/getAllTodo", async () => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return resp.data;
});
export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoData.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload
      };
    });
  }
});

export default TodoSlice.reducer;
