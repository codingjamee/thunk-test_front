import { useEffect, useState } from "react";
import StyledCardBottom from "../styles/StyledCardBottom";
import StyledInnerCard from "../styles/StyledInnerCard";
import Card from "./common/Card";
import axios from "axios";
import { useSelector } from "react-redux";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const reduxTodoList = useSelector((state) => state.todo.todos) | [];
  const getTodos = async () => {
    const data = await axios.get("/api/todo");
    if (data.status === 200) {
      console.log(data.data.todos);
      setTodoList(data.data.todos);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Card title={<h2>This is your Todo List</h2>}>
      <StyledCardBottom>
        {todoList &&
          todoList?.map((todo, idx) => (
            <StyledInnerCard key={`todo-${idx}`}>{todo}</StyledInnerCard>
          ))}
      </StyledCardBottom>
      <Card title={<h5>redux stored todo list</h5>}>
        {reduxTodoList &&
          reduxTodoList?.map((todo, idx) => (
            <StyledInnerCard key={`todo-${idx}`}>{todo}</StyledInnerCard>
          ))}
      </Card>
    </Card>
  );
};

export default TodoList;
