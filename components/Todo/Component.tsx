import * as Styled from "./style";
import { ITodo } from "../../interfaces/itodos";
const Component = ({ description, isDone }: ITodo) => {
  return (
    <Styled.TodoCard>
      <Styled.DeleteButton>x</Styled.DeleteButton>
      <p>{description}</p>
      <p>Status : {isDone ? "Done" : "On work"}</p>
    </Styled.TodoCard>
  );
};

export default Component;
