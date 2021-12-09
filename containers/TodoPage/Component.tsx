import * as Styled from "./style";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
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
        id: new Date().getTime().toString(),
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
        // overlap the selected data by index with the new one 
        updatedTodos[index] = updatedTodo;
        setTodos([...updatedTodos]);
      }
    });
  };

  const sortByTime = (): void => {
    let timeTodos : ITodo[] = [...todos];
    //iterating through all index one by one and one to another
    for(let i : number = 0; i < timeTodos.length; i++){
      for(let j : number = 0; j < timeTodos.length; j++){
        // sort the todos from the oldest time the todo added by comparing the id that based on time
        if(parseInt(timeTodos[i].id) > parseInt(timeTodos[j].id) && !isNewest){
          let temp : ITodo = timeTodos[j];
          //swapping the element 
          timeTodos[j] = timeTodos[i];
          timeTodos[i] = temp;
        }
        // sort the todos from the newest time the todo added by comparing the id that based on time        
        else if(parseInt(timeTodos[i].id) < parseInt(timeTodos[j].id) && isNewest){
          let temp : ITodo = timeTodos[j];
          //swapping the element
          timeTodos[j] = timeTodos[i];
          timeTodos[i] = temp;
        }
      }
    }
    setTimeSortStatus(isNewest ? false : true);
    setTodos([...timeTodos])
  };

  const sortAlphabetically = (): void => {
    const alphabeticallyTodos : ITodo[] = [...todos];

    //sort will turn the element into string where the criteria is based from UTF-16 sequences
    alphabeticallyTodos.sort((a, b) => {
      const todoA = a.description.toLowerCase();
      const todoB = b.description.toLowerCase();
      
      // if TodoA point is less than TodoB 
      if (todoA < todoB) {
        // todoB will be sorted first
        return -1;
      }

      // if TodoB point is less than TodoA
      if (todoB > todoA) {
        //todoA will be sorted first
        return 1;
      }

      // if it's equal the order of TodoA and TodoB will be just like the original
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
        <Styled.Title>Your Task Today 📅</Styled.Title>
        <form onSubmit={handleSubmit}>
          <Styled.TaskInput type="text" placeholder="Add Your Task Here"  value={newTodo} onChange={handleChange} />
          <Styled.AddTodoButton> Add </Styled.AddTodoButton>
        </form>

        <Styled.SorterButtons>
            <Styled.SorterButton onClick={sortByTime}>{isNewest ? 'Newest' : 'Oldest'}</Styled.SorterButton>
            <Styled.SorterButton onClick={sortAlphabetically}>By Name</Styled.SorterButton>
        </Styled.SorterButtons>
        <Styled.GuideText>You can click the task detail and edit it</Styled.GuideText>

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
