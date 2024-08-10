import React from "react";
import KanbanBoard from "./components/KanbanBoard";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  return (
    <div className="app">
      <h1
        style={{
          color: "Grey",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
          fontSize: "50px",
        }}
      >
        Kanban Board
      </h1>
      <KanbanBoard />
      <AddTaskForm />
    </div>
  );
};

export default App;
