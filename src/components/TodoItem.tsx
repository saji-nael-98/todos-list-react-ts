import React from "react";
import Todo from "../models/todo";
import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: Todo;
  deleteFromList: (id: number) => void;
}> = ({ item, deleteFromList }) => {
  return (
    <li
      className={styles.item}
      onClick={() => {
        deleteFromList(item.id);
      }}
    >
      {item.text}
    </li>
  );
};

export default TodoItem;
