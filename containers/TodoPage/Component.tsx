import * as Styled from "./style";
import { ChangeEvent, FormEvent, useState } from "react";
import Head from "next/head";
import Todo from "../../components/Todo";
import { ITodo } from "../../interfaces/itodos";

const Component = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [isNewest, setTimeSortStatus] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
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
    setTodos([...filteredTodos]);
  };

  const updateTodo = (id: string, description: string): void => {
    const updatedTodos: ITodo[] = [];

    todos.forEach((todo: ITodo) => {
      //looking up for todo with the same id if it there, push the new updated todo
      if (todo.id === id) {
        updatedTodos.push({
          id,
          description: description,
          isDone: false,
        });
      } else {
        //if not push the previous todo
        updatedTodos.push(todo);
      }
    });

    setTodos([...updatedTodos]);
  };

  const setDoneStatus = (id: string): void => {
    const updatedTodos: ITodo[] = [...todos];
    const updatedTodo = todos.find((todo) => todo.id === id);

    updatedTodos.forEach((todo: ITodo, index) => {
      //looking up for the same id and check if there is a data inside updatedTodo
      if (todo.id === id && updatedTodo) {
        //change the status isDone to true if false and vice verca
        updatedTodo.isDone = updatedTodo.isDone ? false : true;
        // overlap the data with the new one based on the index
        updatedTodos[index] = updatedTodo;
        setTodos([...updatedTodos]);
      }
    });
  };

  const sortByTime = (): void => {
    const timeTodos : ITodo[] = [...todos];
    //sort by the oldest and newest
    setTodos(timeTodos.reverse());
    //set sort by time status
    setTimeSortStatus(isNewest ? false : true);
  };

  const sortAlphabetically = (): void => {
    const alphabeticallyTodos : ITodo[] = [...todos];

    alphabeticallyTodos.sort((a, b) => {
      const todoA = a.description.toLowerCase();
      const todoB = b.description.toLowerCase();

      if (todoA < todoB) {
        return -1;
      }

      if (todoB > todoA) {
        return 1;
      }

      return 0;
    });

    setTodos([...alphabeticallyTodos]);
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

        <Styled.SorterButtons>
            <button onClick={sortByTime}>{isNewest ? 'Newest' : 'Oldest'}</button>
            <button onClick={sortAlphabetically}>By Name</button>
        </Styled.SorterButtons>
        
        <Styled.Todos>
          {/* if there is no task a text will be shown */}
          {!todos.length && (
            <Styled.EmptyTask>No Task Available</Styled.EmptyTask>
          )}

          {todos.map((todo: ITodo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                description={todo.description}
                isDone={todo.isDone}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                setDoneStatus={setDoneStatus}
              />
            );
          })}
        </Styled.Todos>
      </Styled.Container>
    </>
  );
};

export default Component;
