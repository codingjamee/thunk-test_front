import CardContainer from "../../styles/CardContainer";
import StyledCardBottom from "../../styles/StyledCardBottom";
import TopElement from "../../styles/TopElement";

const Card = ({ title, children }) => {
  return (
    <CardContainer>
      <TopElement>{title}</TopElement>
      <StyledCardBottom>{children}</StyledCardBottom>
    </CardContainer>
  );
};

export default Card;
