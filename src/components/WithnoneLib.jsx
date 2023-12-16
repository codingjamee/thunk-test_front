import StyledCardBottom from "../styles/StyledCardBottom";
import StyledInnerCard from "../styles/StyledInnerCard";
import { useEffect } from "react";
import Card from "./common/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../store/todo";
import { fetchTodoData } from "./TodoActions";

const WithnoneLib = () => {
  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  useEffect(() => {
    dispatch(fetchTodo(fetchTodoData()));
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

export default WithnoneLib;
