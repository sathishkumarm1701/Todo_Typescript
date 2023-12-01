import { createContext, useState } from "react";
import Todo from "../models/todo";

type TodoContextType = {
  item: Todo[];
  addTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};
export const TodoContext = createContext<TodoContextType>({
  item: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export const TodoContextProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    setTodos((prevTodo) => {
      return prevTodo.concat(new Todo(text));
    });
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };
  const todoContextValue: TodoContextType = {
    item: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodoContext.Provider value={todoContextValue}>
      {children}
    </TodoContext.Provider>
  );
};
