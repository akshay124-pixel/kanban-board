// src/redux/reducers.js
import { ADD_TASK, MOVE_TASK, FILTER_TASKS, DELETE_TASK } from "./actions";

const initialState = {
  tasks: [],
  searchTerm: "",
};

const kanbanReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case MOVE_TASK:
      const { taskId, source, destination } = action.payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: destination };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    case FILTER_TASKS:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default kanbanReducer;
