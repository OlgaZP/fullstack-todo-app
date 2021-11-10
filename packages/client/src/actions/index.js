import ACTION_TYPES from './actionTypes';

//creators for get tasks
export const getTasksAction = (filter, pagination) => ({
  type: ACTION_TYPES.GET_TASKS_ACTION,
  filter,
  pagination,
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
});

export const getTasksSuccess = (tasks, filter, pagination) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  tasks,
  filter,
  pagination,
});

export const getTasksError = error => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  error,
});

//creators for create task
export const createTaskAction = task => ({
  type: ACTION_TYPES.CREATE_TASK_ACTION,
  task,
});

export const createTaskRequest = () => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
});

export const createTaskSuccess = task => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  task,
});

export const createTaskError = error => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error,
});
//creators for update task
export const updateTaskAction = (id, taskForUpdate) => ({
  type: ACTION_TYPES.UPDATE_TASK_ACTION,
  id,
  taskForUpdate,
});

export const updateTaskRequest = () => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST,
});

export const updateTaskSuccess = updatedTask => ({
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  updatedTask,
});

export const updateTaskError = error => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  error,
});

//creators for delete task
export const deleteTaskAction = id => ({
  type: ACTION_TYPES.DELETE_TASK_ACTION,
  id,
});

export const deleteTaskRequest = () => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
});

export const deleteTaskSuccess = deletedTask => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  deletedTask,
});

export const deleteTaskError = error => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  error,
});
