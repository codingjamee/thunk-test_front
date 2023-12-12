import StyledCardBottom from "../styles/StyledCardBottom";
import StyledInnerCard from "../styles/StyledInnerCard";
import Card from "./common/Card";

const todoListDummy = [
  "오늘할일",
  "청소하기",
  "빨래하기",
  "다때려치고 코딩하기",
];

const TodoList = () => {
  return (
    <Card title={<h2>This is your Todo List</h2>}>
      <StyledCardBottom>
        {todoListDummy.map((todo) => (
          <StyledInnerCard>{todo}</StyledInnerCard>
        ))}
      </StyledCardBottom>
    </Card>
  );
};

export default TodoList;
