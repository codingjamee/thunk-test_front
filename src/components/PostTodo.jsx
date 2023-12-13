import Card from "./common/Card";
import StyledCardBottom from "../styles/StyledCardBottom";
import StyledInnerCard from "../styles/StyledInnerCard";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { todoActions } from "../store/todo";

const PostTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchTodoList = createAsyncThunk("fetchTodo", async (todo) => {
    try {
      const result = dispatch(todoActions.storeTodos({ todo }));
      return result;
    } catch (err) {
      console.error(err);
    }
  });

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
