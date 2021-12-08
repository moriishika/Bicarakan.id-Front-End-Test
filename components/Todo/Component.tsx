import * as Styled from "./style";
import { ITodoCardProps } from "../../interfaces/itodos";
import { ChangeEvent } from "react";

const Component = ({
  id,
  description,
  isDone,
  removeTodo,
  updateTodo,
  setDoneStatus
}: ITodoCardProps) => {

  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    // expand the height of the textarea by taking the height from scroll height and set the max size of it
    target.style.height = Math.min(target.scrollHeight, 100) + "px";
    updateTodo(id, target.value);
  };

  return (
    <Styled.TodoCard id={id} description={description} isDone={isDone}>
      <Styled.HorizontalBox>
        <Styled.Button onClick={() => removeTodo(id)}>🗑️</Styled.Button>
        <Styled.Button onClick={() => setDoneStatus(id)}>{isDone ? '🔁' : '✔️'}</Styled.Button>
      </Styled.HorizontalBox>
      <Styled.VerticalBox>
        <Styled.Description spellCheck={false} value={description} onChange={handleChange} />
        <Styled.StatusText>Status : {isDone ? "Done" : "On work"}</Styled.StatusText>
      </Styled.VerticalBox>
    </Styled.TodoCard>
  );
};

export default Component;
