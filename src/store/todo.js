import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    storeTodos(state, action) {
      console.log(action.payload);
      state.todos.push(action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
