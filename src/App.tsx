import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextPorvider, { TodosContext } from "./store/todos-context";

function App() {
  return (
    <div className="App">
      <TodosContextPorvider>
        <NewTodo />
        <Todos />
      </TodosContextPorvider>
    </div>
  );
}

export default App;
