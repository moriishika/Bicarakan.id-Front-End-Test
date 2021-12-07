import * as Styled from "./style";
import { ITodo } from "../../interfaces/itodo";
const Component = ({ description, isDone }: ITodo) => {
  return (
    <Styled.TodoCard>
      <p>CONTOH TODO</p>
    </Styled.TodoCard>
  );
};

export default Component;
