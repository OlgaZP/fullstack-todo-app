import { put } from 'redux-saga/effects';
import {
  createTaskError,
  createTaskRequest,
  createTaskSuccess,
  updateTaskError,
  updateTaskRequest,
  updateTaskSuccess,
  deleteTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  getTasksError,
  getTasksRequest,
  getTasksSuccess,
} from '../actions';
import * as API from './../api';

export function * getTasksSaga (actions) {
  const { filter, pagination } = actions;
  yield put(getTasksRequest());
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks(filter, pagination);
    yield put(getTasksSuccess(tasks, filter, pagination));
  } catch (err) {
    yield put(getTasksError(err));
  }
}

export function * createTaskSaga (action) {
  const { task } = action;

  yield put(createTaskRequest());
  try {
    const {
      data: { data: newTask },
    } = yield API.createTask(task);
    yield put(createTaskSuccess(newTask));
  } catch (err) {
    // console.log(`err from saga`, err.response.data.errors);
    yield put(createTaskError(err.response.data.errors[0]));
  }
}

export function * updateTaskSaga (action) {
  const { id, taskForUpdate } = action;
  // console.log(`into update task saga`);
  yield put(updateTaskRequest());
  try {
    const {
      data: { data: updatedTask },
    } = yield API.updateTask(id, taskForUpdate);
    // console.log(`updatedTask from saga`, updatedTask);
    yield put(updateTaskSuccess(updatedTask));
  } catch (err) {
    yield put(updateTaskError(err.response.data.errors[0]));
  }
}

export function * deleteTaskSaga (action) {
  const { id } = action;
  // console.log(`into deleteTaskSaga id=`, id);
  yield put(deleteTaskRequest());
  try {
    const {
      data: { data: deletedTask },
    } = yield API.deleteTask(id);
    // console.log(`deletedTask from delete saga`, deletedTask);
    yield put(deleteTaskSuccess(deletedTask));
  } catch (err) {
    yield put(deleteTaskError(err.response.data.errors[0]));
  }
}
