import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//여기서는 hook을 사용할 수 없으므로
//trigger를 dispatch하는 곳에서 받아와야 할것 같은데
//타입이 잡히지 않는것 같음....
export const fetchTodo = createAsyncThunk(
  "todo/fetchTodo",
  async (trigger, { rejectWithValue }) => {
    try {
      const response = await trigger({ applyResult: true });
      console.log(response);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
