import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PostTodo from "./components/PostTodo";
import AppLayout from "./components/AppLayout";
import TodoList from "./components/TodoList";
import BeforePostTodo from "./components/BeforePostTodo";
import WithAxiosThunk from "./components/WithAxiosThunk";
import WithnoneLib from "./components/WithnoneLib";

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
      {
        path: "/before-todo",
        element: <BeforePostTodo />,
      },
      {
        path: "/with-thunk-list",
        element: <WithAxiosThunk />,
      },
      {
        path: "/with-none-libs",
        element: <WithnoneLib />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
