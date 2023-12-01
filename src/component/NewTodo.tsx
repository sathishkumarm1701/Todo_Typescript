import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/ts-config";

const NewTodo: React.FC = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const TodoCtx = useContext(TodoContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    TodoCtx.addTodo(enteredText);
    todoInputRef.current!.value = "";
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Your Todos</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
