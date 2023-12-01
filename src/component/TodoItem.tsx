import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{
  text: string;
  removeHandler: () => void;
}> = ({ text, removeHandler }) => {
  return (
    <li className={classes.item} key={text} onClick={removeHandler}>
      {text}
    </li>
  );
};

export default TodoItem;
