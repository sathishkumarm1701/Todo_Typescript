import NewTodo from "./component/NewTodo";
import Todos from "./component/Todos";
import { TodoContextProvider } from "./store/ts-config";
function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
