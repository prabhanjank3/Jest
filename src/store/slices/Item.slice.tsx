import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ItemProps {
  name: string;
  price: number;
}

const initialState: ItemProps = {
  name: "",
  price: 0
};

export const ItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      return {
        ...state,
        name: action.payload
      };
    }
  }
});

export default ItemSlice.reducer;
export const { changeName } = ItemSlice.actions;
