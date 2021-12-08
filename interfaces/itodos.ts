export interface ITodo {
    description? : string,
    isDone? : boolean,
    removeTodo? : (id : number) => void
}
