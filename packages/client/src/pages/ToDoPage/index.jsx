import React from 'react';
import ToDoForm from '../../components/ToDoForm';
import ToDoList from '../../components/ToDoList';
import classNames from 'classnames';
import styles from './ToDoPage.module.sass';

function ToDoPage () {
  return (
    <div className={styles.appContainer}>
      <h1 style={{ color: 'darkblue' }}>Organize ToDo </h1>
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default ToDoPage;
