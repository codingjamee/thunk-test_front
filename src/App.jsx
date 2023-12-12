import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PostTodo from "./components/PostTodo";
import AppLayout from "./components/AppLayout";
import TodoList from "./components/TodoList";

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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
