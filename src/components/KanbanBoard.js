import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskColumn from "./TaskColumn";
import { moveTask, filterTasks, addTask } from "../redux/actions";

const KanbanBoard = () => {
  const tasks = useSelector((state) => state.tasks);
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    dispatch(
      moveTask(result.draggableId, source.droppableId, destination.droppableId)
    );
  };

  const handleSearch = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  const handleAddTask = (task) => {
    dispatch(addTask(task));
    setShowModal(false);
  };

  return (
    <>
      <div className="kanban-board platypi-custom">
        <input
          type="text"
          placeholder="Search tasks..."
          onChange={handleSearch}
          className="search-bar platypi-custom"
        />
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="columns platypi-custom">
            {["To Do", "In Progress", "Peer Review", "Done"].map((stage) => (
              <Droppable key={stage} droppableId={stage}>
                {(provided) => (
                  <TaskColumn
                    stage={stage}
                    tasks={filteredTasks.filter(
                      (task) => task.status === stage
                    )}
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {provided.placeholder}
                  </TaskColumn>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
        <button
          className="add-task-button platypi-custom"
          onClick={() => setShowModal(true)}
        >
          +
        </button>
        {showModal && (
          <div className="modal">
            <div className="modal-content platypi-custom">
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const title = e.target.title.value;
                  const description = e.target.description.value;
                  handleAddTask({ title, description, status: "To Do" });
                }}
              >
                <input
                  name="title"
                  placeholder="Task Title"
                  required
                  className="platypi-custom"
                />
                <textarea
                  name="description"
                  placeholder="Task Description"
                  required
                  className="platypi-custom"
                />
                <button type="submit" className="platypi-custom">
                  Add Task
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default KanbanBoard;
