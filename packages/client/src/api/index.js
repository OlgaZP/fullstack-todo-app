import axios from 'axios';

const axiosParams = {
  baseURL: 'http://127.0.0.1:5000/api',
};

const apiInstance = axios.create(axiosParams);

export const getTasks = () => apiInstance.get('/todo');

export const createTask = task => apiInstance.post('/todo', task);

export const updateTask = (id, task) => apiInstance.patch(`/todo/${id}`, task);

export const deleteTask = id => apiInstance.delete(`/todo/${id}`);
