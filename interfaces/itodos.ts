export interface ITodo {
  id: string;
  description: string;
  isDone: boolean;
}

export interface ITodoCardProps extends ITodo{
  removeTodo: (id: string) => void;
  updateTodo: (id: string, description: string) => void;
  setDoneStatus : (id: string) => void;
}
