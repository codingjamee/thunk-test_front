import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/todo-list">리스트 보기</Link>
        <Link to="/post-todo">리스트 추가하기</Link>
      </div>
      <Outlet />
    </>
  );
};

export default AppLayout;
