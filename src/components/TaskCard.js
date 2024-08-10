// src/components/TaskCard.js
import React from "react";
import { useDispatch } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import { deleteTask } from "../redux/actions";

const TaskCard = ({ task, index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <button class="btn btn-danger" onClick={handleDelete}>
            Delete &times;
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
