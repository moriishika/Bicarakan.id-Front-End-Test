import styled from "styled-components";
import { ITodo } from "../../interfaces/itodos";

export const TodoCard = styled.div<ITodo>`
  background-color: ${({ isDone }) => (isDone ? "#46474A" : "#3882F2")};
  color: ${({ isDone }) => (isDone ? "#706969" : "white")};
  padding: 20px;
  transition: 0.5s;
  margin: 25px;
  overflow: hidden;
  resize: none;
  border-radius : 15px;
  box-shadow: ${({ isDone }) => (isDone ? "rgba(50, 57, 58, 0.3) 0px 20px 30px" : "rgba(72, 136, 235, 0.4) 0px 20px 30px")};
  &:hover {
    cursor: pointer;
    background-color: ${({ isDone }) => (isDone ? "#1B2534" : "#005fef")};
  }
`;

export const HorizontalBox = styled.div`
    display : flex;
    justify-content: space-between;
`

export const VerticalBox = styled(HorizontalBox)`
    flex-direction: column;
    margin-top: 20px;
`;

export const StatusText = styled.p`
  color : white;
`;


export const Button = styled.button`
  all : unset;
  font-size : 1rem;
  position: relative;
  right: 0;
`;

export const Description = styled.textarea`
  all: unset;
  transition: 0.2s;
  height: auto;
  word-wrap : break-word;   
  &::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  &:hover {
    background-color: #1b1b1b3a;
  }
`;
