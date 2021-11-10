import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
  pagination: {
    page: 1,
    results: 5,
  },
  filter: {
    priority: 'all',
  },
};

function tasksReduser (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { tasks, filter, pagination } = action;

      const newTasks = [...tasks];
      const newPagination = pagination || initialState.pagination;
      const newFilter = filter || initialState.filter;
      return {
        ...state,
        isFetching: false,
        tasks: newTasks,
        pagination: newPagination,
        filter: newFilter,
      };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    //C - create
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { task } = action;
      const { tasks } = state;
      const newTasks = [...tasks, task];
      return {
        ...state,
        isFetching: false,
        tasks: newTasks,
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { error } = action;

      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    //U - update
    case ACTION_TYPES.UPDATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.UPDATE_TASK_SUCCESS: {
      const { updatedTask } = action;
      const { tasks } = state;

      const index = tasks.findIndex(t => t.id === updatedTask.id);
      tasks[index] = { ...tasks[index], ...updatedTask };

      return {
        ...state,
        isFetching: false,
        tasks,
      };
    }
    case ACTION_TYPES.UPDATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    //D - delete
    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.DELETE_TASK_SUCCESS: {
      const { deletedTask } = action;
      const { tasks } = state;

      const modifiedTasks = [...tasks];
      modifiedTasks.splice(
        modifiedTasks.findIndex(t => t.id === deletedTask.id),
        1
      );

      return {
        ...state,
        isFetching: false,
        tasks: modifiedTasks,
      };
    }
    case ACTION_TYPES.DELETE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default tasksReduser;
