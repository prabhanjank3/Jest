import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slices/Item.slice";
import TodoSlice from "./slices/Todo.slice";

export const store = configureStore({
  reducer: {
    itemReducer: itemReducer,
    todoReducer: TodoSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
