import { useEffect, useState } from "react";
import StyledCardBottom from "../styles/StyledCardBottom";
import StyledInnerCard from "../styles/StyledInnerCard";
import Card from "./common/Card";
import axios from "axios";
import { useSelector } from "react-redux";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const reduxTodoList = useSelector((state) => state.todo.todos) | [];
  console.log(reduxTodoList);
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
          todoList?.map(({ id, todo }) => (
            <StyledInnerCard key={`todo-${id}`}>{todo}</StyledInnerCard>
          ))}
      </StyledCardBottom>
    </Card>
  );
};

export default TodoList;
