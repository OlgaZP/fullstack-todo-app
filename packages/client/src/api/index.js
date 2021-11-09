import axios from 'axios';

const axiosParams = {
  baseURL: 'http://127.0.0.1:5000/api',
};

const apiInstance = axios.create(axiosParams);

//add filter parameters to server request
export const getTasks = (filter, pagination) =>
  apiInstance.get(
    `/todo?page=${pagination.page}&results=${pagination.results}&priority=${filter.priority}`
  );

export const createTask = task => apiInstance.post('/todo', task);

export const updateTask = (id, task) => apiInstance.patch(`/todo/${id}`, task);

export const deleteTask = id => apiInstance.delete(`/todo/${id}`);
