import React, { useState } from "react";

const Todo = ({ task, id, remove }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleCompleted = () => {
    setIsCompleted((completed) => !completed);
  };

  const handleDelete = () => remove(id);

  return (
    <li className={isCompleted ? "completed" : ""}>
      <input type="checkbox" id="completed" onClick={toggleCompleted} />

      {task}

      {/* <button className="btn-edit">Edit</button> */}
      <button className="btn-delete" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Todo;
