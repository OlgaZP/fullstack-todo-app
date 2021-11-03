import axios from 'axios';

const axiosParams = {
  baseURL: 'http://127.0.0.1:5000/api',
};

const apiInstance = axios.create(axiosParams);

//add filter parameters to server request
export const getTasks = () =>
  apiInstance
    .get('/todo')
    .then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      return response;
    })
    .catch();

export const createTask = task =>
  apiInstance.post('/todo', task).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('error.response.data', error.response.data);
      console.log('error.response.status', error.response.status);
      return {
        status: error.response.status,
        errors: error.response.data.errors,
      };
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

export const updateTask = (id, task) => apiInstance.patch(`/todo/${id}`, task);

export const deleteTask = id => apiInstance.delete(`/todo/${id}`);
