import React from "react";
import TaskCard from "./TaskCard";
import "../App.css";
const TaskColumn = ({ stage, tasks, innerRef, ...props }) => {
  return (
    <div className="task-column" ref={innerRef} {...props}>
      <h3>{stage}</h3>
      {tasks.map((task, index) => (
        <TaskCard key={task.id} task={task} index={index} />
      ))}
    </div>
  );
};

export default TaskColumn;
