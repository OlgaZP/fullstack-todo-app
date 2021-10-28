import { combineReducers } from 'redux';
import tasksReduser from './tasksReduser';

const rootReducer = combineReducers({
  tasks: tasksReduser,
});

export default rootReducer;
