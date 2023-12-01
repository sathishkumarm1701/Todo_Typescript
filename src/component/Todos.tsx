import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/ts-config";

const Todos: React.FC = () => {
  const TodoCtx = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {TodoCtx.item.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          removeHandler={TodoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
