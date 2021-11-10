import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import * as actionCreators from './../../actions';
import ACTION_TYPES from '../../actions/actionTypes';
import styles from './ToDoList.module.sass';

function ToDoList (props) {
  console.log('props for ToDoList :>> ', props);
  const {
    tasks,
    filter,
    pagination,
    isFetching,
    error,
    getTasks,
    deleteTask,
    updateTask,
  } = props;

  useEffect(() => {
    getTasks(filter, pagination);
  }, []);

  const cs = classNames.bind(styles);

  console.log('tasks from ToDoListComponent:>> ', tasks);
  console.log('filter from ToDoListComponent:>> ', filter);
  console.log('pagination from ToDoListComponent:>> ', pagination);

  const mapTask = ({ id, title, date, description, isDone, priority }) => {
    const deleteHandler = () => {
      console.log('id from delete handler :>> ', id);
      deleteTask(id);
    };

    const changeDoneStatusHandler = () => {
      console.log('change done status :>> ');
      updateTask(id, { isDone: !isDone });
    };

    const liClassNames = cs({
      toDoContainer: true,
      toDoIsDone: isDone,
      [`${priority}Priority`]: true,
    });

    return (
      <li className={liClassNames} key={id}>
        <input
          type='checkbox'
          checked={isDone}
          onChange={changeDoneStatusHandler}
        />
        <div className={styles.toDoItem}>
          <p> {title} </p>
          <p> {date}</p>
          <p> {description} </p>
        </div>
        <FontAwesomeIcon
          style={{ width: '2em', textAlign: 'center' }}
          icon={faPen}
        />
        <FontAwesomeIcon
          style={{ width: '2em', textAlign: 'center' }}
          icon={faTrash}
          onClick={deleteHandler}
        />
      </li>
    );
  };

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {console.log('error from ToDoList:>> ', error)}
      {error && (
        <div style={{ fontWeight: 'bold', color: 'red' }}>
          ERROR: {error}
          {/* {error?.title}, {error?.details[0]?.type} */}
        </div>
      )}
      <ul style={{ margin: '0', padding: '0' }}>{tasks.map(mapTask)}</ul>
    </>
  );
}

const mapStateToProps = state => state.tasks;

const mapDispatchToProps = dispatch => ({
  getTasks: (filter, pagination) =>
    dispatch(actionCreators.getTasksAction(filter, pagination)),
  deleteTask: id => dispatch(actionCreators.deleteTaskAction(id)),
  updateTask: (id, taskForUpdate) =>
    dispatch(actionCreators.updateTaskAction(id, taskForUpdate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
