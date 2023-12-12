import StyledCard from "../styles/TopElement";
import Card from "./common/Card";
import StyledCardBottom from "../styles/StyledCardBottom";
import StyledInnerCard from "../styles/StyledInnerCard";

const PostTodo = () => {
  return (
    <Card title={<h2>Enter your Todo List</h2>}>
      <StyledCardBottom>
        <StyledInnerCard>
          {" "}
          <input type="text" />
          <button>추가하기</button>
        </StyledInnerCard>
      </StyledCardBottom>
    </Card>
  );
};

export default PostTodo;
