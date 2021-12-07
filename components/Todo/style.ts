import styled from "styled-components";
import { ITodo } from "../../interfaces/itodo";

export const TodoCard = styled.div<ITodo>`
  background-color: ${({ isDone }) => (isDone ? "#3882F2" : "#1B2534")};
  color: ${({ isDone }) => (isDone ? "#706969" : "white")};
  flex-basis: 300px;
  padding : 2px;
  transition: 0.8s;
  &.hover {
    background-color: #166df1;
  }
`;
