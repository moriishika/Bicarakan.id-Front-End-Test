import * as Styled from "./style";
import Todo from "../../components/Todo";

const Component = () => {
  return (
    <Styled.Container>
      <Styled.Title>Your Task Today</Styled.Title>
      <Styled.Todos>
        <Todo></Todo>
      </Styled.Todos>
    </Styled.Container>
  );
};

export default Component;
