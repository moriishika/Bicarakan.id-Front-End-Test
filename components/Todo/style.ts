import styled from "styled-components";
import { ITodo } from "../../interfaces/itodos";

export const TodoCard = styled.div<ITodo>`
  background-color: ${({ isDone }) => (isDone ? "#1B2534" : "#3882F2")};
  color: ${({ isDone }) => (isDone ? "#706969" : "white")};
  flex-basis: 300px;
  padding : 2px;
  transition: 0.8s;
  margin : 5px;
  &.hover {
    background-color: #166df1;
  }
`;

export const DeleteButton = styled.button`
    font-weight: 600;
    position: relative;
    right: 0;
`

export const Description = styled.input`
    all : unset;
`
