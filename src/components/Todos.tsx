import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
const Todos: React.FC = () => {
  const todosCTX = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todosCTX.items.map((item) => (
        //no need to pass 'key', because of FC
        <TodoItem
          key={item.id}
          item={item}
          deleteFromList={todosCTX.removeTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
