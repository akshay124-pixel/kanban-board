export const ADD_TASK = "ADD_TASK";
export const MOVE_TASK = "MOVE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const FILTER_TASKS = "FILTER_TASKS";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const moveTask = (taskId, source, destination) => ({
  type: MOVE_TASK,
  payload: { taskId, source, destination },
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const filterTasks = (searchTerm) => ({
  type: FILTER_TASKS,
  payload: searchTerm,
});
