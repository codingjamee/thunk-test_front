import { useEffect, useState } from "react";
import StyledCardBottom from "../styles/StyledCardBottom";
import StyledInnerCard from "../styles/StyledInnerCard";
import Card from "./common/Card";
import axios from "axios";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const getTodos = async () => {
    const data = await axios.get("/api/todo");
    console.log(data);
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
            <StyledInnerCard key={`todo-${idx}`}>{todo.todo}</StyledInnerCard>
          ))}
      </StyledCardBottom>
    </Card>
  );
};

export default TodoList;
