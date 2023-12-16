import Card from "./common/Card";
import StyledCardBottom from "../styles/StyledCardBottom";
import StyledInnerCard from "../styles/StyledInnerCard";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import { todoActions } from "../store/todo";

//useState를 사용하지 않고,
//redux만으로 현재 상태를 관리하는 경우,
//api통신 이후 해당 상태를 업데이트하여 화면에 그려줘야 하는경우
//thunk를 활용해야 한다!!!
//그래야 api 비동기 통신의 결괏값을 받아와서 thunk로 store에 저장할 수 있다.

const PostTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //thunkAPI.rejectWithValue는 dispatching이후 에러 체크
  const fetchTodoList = createAsyncThunk(
    "fetchTodo",
    async (todo, thunkAPI) => {
      try {
        const result = await thunkAPI.dispatch(
          todoActions.storeTodos({ todo })
        );
        return unwrapResult(result);
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
      }
    }
  );

  const onClickAddTodo = async () => {
    const fetchTodoResult = await dispatch(fetchTodoList(todo));
    navigate("/before-todo");
  };

  return (
    <Card title={<h2>Enter your Todo List</h2>}>
      <StyledCardBottom>
        <StyledInnerCard>
          {" "}
          <input
            type="text"
            style={{
              flexGrow: 8,
              border: "0.3px solid gray",
              opacity: 0.7,
              borderRadius: "3px",
            }}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            onClick={onClickAddTodo}
            style={{
              border: "0.3px solid gray",
              opacity: 0.7,
              borderRadius: "3px",
            }}
          >
            추가하기
          </button>
        </StyledInnerCard>
      </StyledCardBottom>
    </Card>
  );
};

export default PostTodo;
