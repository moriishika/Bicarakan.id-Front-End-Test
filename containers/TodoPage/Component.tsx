import * as Styled from "./style";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Head from "next/head";
import Todo from "../../components/Todo";
import { ITodo } from "../../interfaces/itodos";

const Component = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { description: "Let's add a task", isDone: false },
  ]);
  
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Unable to add task if newTodo is an empty string
    if(!newTodo){
        return;
    }

    addTodo();
    setNewTodo('');
  };

  const addTodo = () => {
    setTodos([...todos, { description: newTodo, isDone: false }]);
  };

  const removeTodo = (id : number) => {
    // Filtering todo that has different id with the index 
    const filteredTodos = todos.filter((element, index) => index != id);
    setTodos([...filteredTodos])
  }

  return (
    <>
      <Head>
        <title>Todo App Test</title>
      </Head>
      <Styled.Container>
        <Styled.Title>Your Task Today</Styled.Title>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newTodo} onChange={handleChange} />
          <Styled.AddTodoButton> Add Todo </Styled.AddTodoButton>
        </form>
        <Styled.Todos>
          {todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                description={todo.description}
                isDone={todo.isDone}
                removeTodo={removeTodo}
              />
            );
          })}
        </Styled.Todos>
      </Styled.Container>
    </>
  );
};

export default Component;
