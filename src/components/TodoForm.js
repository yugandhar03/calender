import React, { useState, useEffect, useRef } from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    //inputRef.current.focus();
  });

  const idExist = (id, array) => {
    var found = -1;
    for (var i = 0; i < props.length; i++) {
      if (array[i].id === id) {
        found = i;
        break;
      }
    }
    return found;
  };

  const generateTodoId = () => {
    var id = Math.floor(Math.random() * 10000);
    while (idExist(id, props.todos) >= 0) {
      id = Math.floor(Math.random() * 10000);
    }
    return id;
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: generateTodoId(),
      text: input
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            <AiOutlineFileDone size={40} />
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add Iteam"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button
            data-tip="Add Todo"
            onClick={handleSubmit}
            className="todo-button"
          >
            <MdPlaylistAdd size={40} />
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
