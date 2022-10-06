import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  // Add item to the do the to do list
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [...todos, todo];

    setTodos(newTodos);
    //console.log(newTodos); // log to console - to be removed
  };
  //update the to do list
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  // remove item form the todo list
  const removeTodo = (id) => {
    // return a filtered to do list(with out the removed item)
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 className="todo-list-title">What's the Plan for Today?</h1>
      <TodoForm todos={todos} length={todos.length} onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
