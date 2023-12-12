import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "", todo: "" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    storeTodos(state, action) {
      state.todos = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
