import * as Styled from "./style";
import { ITodoCardProps } from "../../interfaces/itodos";
const Component = ({ id, description, isDone, removeTodo, updateTodo }: ITodoCardProps) => {
  return (
    <Styled.TodoCard id={id} description={description} isDone={isDone}>
      <Styled.DeleteButton onClick={() => removeTodo(id)}>x</Styled.DeleteButton>
      <Styled.Description value={description} onChange={() => updateTodo(id)}/>
      <p>Status : {isDone ? "Done" : "On work"}</p>
    </Styled.TodoCard>
  );
};

export default Component;
