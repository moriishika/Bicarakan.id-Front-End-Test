import * as Styled from "./style";
import { ChangeEvent, FormEvent, useState } from "react";
import Head from "next/head";
import Todo from "../../components/Todo";
import { ITodo } from "../../interfaces/itodos";

const Component = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: new Date().getMilliseconds().toString(),
      description: "Let's add a task",
      isDone: false,
    },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Unable to add task if newTodo is an empty string
    if (!newTodo) {
      return;
    }

    addTodo();
    setNewTodo("");
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: new Date().getMilliseconds().toString(),
        description: newTodo,
        isDone: false,
      },
    ]);
  };

  const removeTodo = (id: string): void => {
    // Filtering todo that has different id with the index
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    console.log(filteredTodos);
    setTodos([...filteredTodos]);
  };

  const updateTodo = (id: string): void => {
    const updatedTodos: ITodo[] = [];

    todos.forEach((todo: ITodo) => {
      if (todo.id === id) {
        updatedTodos.push({
          id,
          description: newTodo,
          isDone: false,
        });
      }
      updatedTodos.push(todo);
    });

    setTodos([...updatedTodos]);
  };

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
          {todos.map((todo: ITodo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                description={todo.description}
                isDone={todo.isDone}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
            );
          })}
        </Styled.Todos>
      </Styled.Container>
    </>
  );
};

export default Component;
