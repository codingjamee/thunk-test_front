import { useEffect, useState } from "react";
import StyledCardBottom from "../styles/StyledCardBottom";
import StyledInnerCard from "../styles/StyledInnerCard";
import Card from "./common/Card";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BeforePostTodo = () => {
  const reduxTodoList = useSelector((state) => state.todo.todos);
  console.log({ reduxTodoList });

  console.log(reduxTodoList[0]);
  const navigate = useNavigate();

  const onClickPostTodo = async () => {
    const result = await axios.post("/api/todo", { todo: reduxTodoList });
    if (result.status === 200) navigate("/todo-list");
  };
  return (
    <Card title={<h2>This is your Before send Todo List</h2>}>
      <StyledCardBottom>
        {reduxTodoList &&
          reduxTodoList?.map((todo, idx) => (
            <StyledInnerCard key={`todo-${idx}`}>{todo.todo}</StyledInnerCard>
          ))}
      </StyledCardBottom>

      <button
        onClick={onClickPostTodo}
        style={{
          border: "0.3px solid gray",
          opacity: 0.7,
          borderRadius: "3px",
        }}
      >
        서버에 전송 하기
      </button>
    </Card>
  );
};

export default BeforePostTodo;
