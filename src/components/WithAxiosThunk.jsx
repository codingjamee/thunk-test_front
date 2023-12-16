import StyledCardBottom from "../styles/StyledCardBottom";
import StyledInnerCard from "../styles/StyledInnerCard";
import { useEffect } from "react";
import Card from "./common/Card";
import { useDispatch, useSelector } from "react-redux";
import useApi from "../components/hooks/useApi";
import { fetchTodo } from "../store/todo";

const WithAxiosThunk = () => {
  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const { trigger } = useApi({ method: "get", path: "/todo" });

  //trigger를 한 뒤, 요청을 받아와서
  //그다음에 dispatch함
  //받은 요청을 그대로 그려줘야 하기 때문에 thunk를 활용

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  //dispatch할 때 인자로 ??? 함수를???
  useEffect(() => {
    dispatch(fetchTodo(() => trigger()));
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

export default WithAxiosThunk;

// "TypeError: Cannot read properties of undefined (reading 'method') at http://localhost:3000/static/js/bundle.js:1143:13 at http://localhost:3000/static/js/bundle.js:831:75 at http://localhost:3000/static/js/bundle.js:1385:26 at http://localhost:3000/static/js/bundle.js:52256:79 at http://localhost:3000/static/js/bundle.js:52286:10 at http://localhost:3000/static/js/bundle.js:59376:14 at http://localhost:3000/static/js/bundle.js:51619:34 at Object.dispatch (http://localhost:3000/static/js/bundle.js:51429:12) at dispatch (<anonymous>:6:7384) at http://localhost:3000/static/js/bundle.js:831:5"
