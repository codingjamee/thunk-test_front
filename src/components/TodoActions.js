import { todoActions } from "../store/todo";
import useApi from "./hooks/useApi";

export const fetchTodoData = () => {
  return async (dispatch) => {
    const { trigger } = useApi({ method: "get", path: "/todo" });
    const fetchData = async () => {
      const response = await trigger({ applyResult: true });
      const data = await response.data;
      console.log(data);
      return data;
    };

    try {
      const todoData = await fetchData();
      console.log(todoData);
      dispatch(todoActions.storeTodos(todoData));
    } catch (error) {
      dispatch();
    }
  };
};

//hook은 여기서도 못불러온다 ㅜ_ㅜ
// Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React and the renderer (such as React DOM) 2. You might be breaking the Rules of Hooks 3. You might have more than one copy of React in the same app See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem
