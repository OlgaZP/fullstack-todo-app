import axios from 'axios';

const axiosParams = {
  baseURL: 'http://127.0.0.1:5000/api',
};

const apiInstance = axios.create(axiosParams);

export const getTasks = () => apiInstance.get('/todo');
// export const getTasks = () => {
//   return Promise.resolve({ data: tasks });
// };

export const createTask = task => apiInstance.post('/todo', task);
// export const createTask = task => {
//   const newTask = {
//     id: Date.now() + Math.trunc(Math.random() * 1000000),
//     ...task,
//   };
//   tasks.push(newTask);
//   return Promise.resolve({ data: newTask });
// };

export const updateTask = task => apiInstance.patch('/todo', task);

export const deleteTask = id => apiInstance.delete(`/todo/${id}`);
