import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./atoms";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [task, setTask] = useState("");

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask(""); // Clear input field
  };

  // Remove a task
  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
          className="border p-2 flex-grow"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 ml-2">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center p-2 border-b">
            <span
              onClick={() => toggleTask(todo.id)}
              className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTask(todo.id)} className="bg-red-500 text-white px-2">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
