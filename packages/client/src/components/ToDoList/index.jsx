import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import * as actionCreators from './../../actions';
import ACTION_TYPES from '../../actions/actionTypes';
import styles from './ToDoList.module.sass';

function ToDoList (props) {
  const { tasks, isFetching, error, getTasks, deleteTask, updateTask } = props;

  useEffect(() => {
    getTasks();
  }, []);

  const cs = classNames.bind(styles);

  console.log('tasks from ToDoListComponent:>> ', tasks);
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
      {error && <div>ERROR</div>}
      <ul style={{ margin: '0', padding: '0' }}>{tasks.map(mapTask)}</ul>
    </>
  );
}

const mapStateToProps = state => state.tasks;

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(actionCreators.getTasksAction()),
  deleteTask: id => dispatch(actionCreators.deleteTaskAction(id)),
  updateTask: (id, taskForUpdate) =>
    dispatch(actionCreators.updateTaskAction(id, taskForUpdate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
