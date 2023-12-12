import { Link, Outlet } from "react-router-dom";
import StyledButton from "../styles/StyledButton";
import StyledLink from "../styles/StyledLink";
import Wrapper from "../styles/Wrapper";

const AppLayout = () => {
  return (
    <>
      <Wrapper>
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
            justifyContent: "center",
            width: "70%",
            margin: "0 auto",
          }}
        >
          <StyledLink to="/todo-list">
            <StyledButton>리스트 보기</StyledButton>
          </StyledLink>
          <StyledLink to="/post-todo">
            <StyledButton>리스트 추가하기</StyledButton>
          </StyledLink>
        </div>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default AppLayout;
