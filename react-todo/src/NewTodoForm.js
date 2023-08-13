import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ createTodo }) => {
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      createTodo({ task, id: uuid() });
      setTask("");
    } else {
      alert("You cannot add empty string");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">New Task : </label>
        <input
          type="text"
          id="task"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
