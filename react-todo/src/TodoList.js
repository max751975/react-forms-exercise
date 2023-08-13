import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const create = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <NewTodoForm createTodo={create} />
      <ol>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} task={todo.task} remove={remove} />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
