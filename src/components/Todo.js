import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { MdDone } from "react-icons/md";
import { GrUndo } from "react-icons/gr";
import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ""
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
        className="todo-list-item"
      >
        {todo.text}
      </div>

      <div className="icons">
        {!todo.isComplete ? (
          <MdDone
            onClick={() => completeTodo(todo.id)}
            size={30}
            className="complete-icon"
          />
        ) : (
          <GrUndo
            onClick={() => completeTodo(todo.id)}
            size={30}
            className="complete-icon"
          />
        )}
        <FiTrash2 onClick={() => removeTodo(todo.id)} className="delete-icon" />
        <FiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
