import React from 'react';
import { useContext, useCallback } from 'react';
import ToDoForm from '../../components/ToDoForm';
import ToDoList from '../../components/ToDoList';
import classNames from 'classnames/bind';
import styles from './ToDoPage.module.sass';
import FilterForm from '../../components/FilterForm';
import { ThemeContext } from './../../contexts';

function ToDoPage () {
  const [theme, setTheme] = useContext(ThemeContext);

  const ThemeSwitcher = useCallback(() => {
    setTheme(theme => (theme === 'darkTheme' ? 'lightTheme' : 'darkTheme'));
  }, []);

  const cs = classNames.bind(styles);

  const appStyles = cs({
    appContainer: true,
    [`${theme}`]: true,
  });

  return (
    <div className={appStyles}>
      <h1>Organize ToDo </h1>
      <button onClick={ThemeSwitcher}>Switch Theme</button>
      <ToDoForm />
      <FilterForm />
      <ToDoList />
    </div>
  );
}

export default ToDoPage;
