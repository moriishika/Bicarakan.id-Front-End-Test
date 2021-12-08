import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
`;

export const Todos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px;
  margin-top: 30px;
`;

export const AddTodoButton = styled.button`
  width: 100px;
  color: white;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #0167ff;
  box-shadow: rgba(1, 103, 255, 0.3) 0px 5px 15px;
  font-weight: bold;
  height: 30px;
  font-size: 15px;
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    background-color: #010aff;
  }
`;

export const TaskInput = styled.input`
  height: 30px;
  padding: 8px;
  border: 2px solid rgba(13, 71, 184, 0.71);
  border-radius: 5px;
  transition: 0.2s;
  &:focus {
    border: 3px solid rgba(13, 100, 200, 0.71);
    padding: 10px;
    outline: none;
  }
`;

export const EmptyTask = styled(Title)`
  font-size: 30px;
  width: 100%;
`;

export const SorterButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: 40px;
`;
export const SorterButton = styled(AddTodoButton)`
  background-color: #4799B2;
  box-shadow: rgba(71, 153, 178, 0.3) 0px 5px 15px;
  margin-right: 10px;
  margin-left: 10px;
  height: 40px;
  font-weight: 500;
  &:hover {
    background-color: #227F9C;
  }
`;
