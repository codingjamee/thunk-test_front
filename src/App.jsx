import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PostTodo from "./PostTodo";
import AppLayout from "./AppLayout";
import TodoList from "./TodoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/post-todo",
        element: <PostTodo />,
      },
      {
        path: "/todo-list",
        element: <TodoList />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <h1>Home화면</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
