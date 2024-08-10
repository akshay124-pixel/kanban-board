import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import "../App.css";
const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: `task-${Date.now()}`,
      title,
      description,
      status: "To Do",
    };
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-task-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
