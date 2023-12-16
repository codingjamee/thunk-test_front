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
          <StyledLink to="/post-todo">
            <StyledButton>리스트 추가하기</StyledButton>
          </StyledLink>
          <StyledLink to="/before-todo">
            <StyledButton>보낼 리스트 확인하기</StyledButton>
          </StyledLink>
          <StyledLink to="/todo-list">
            <StyledButton>리스트 보기</StyledButton>
          </StyledLink>
          <StyledLink to="/with-thunk-list">
            <StyledButton>axios+customhook+thunk!!!</StyledButton>
          </StyledLink>
          <StyledLink to="/with-none-libs">
            <StyledButton>noneLibsThunk!!!</StyledButton>
          </StyledLink>
        </div>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default AppLayout;
