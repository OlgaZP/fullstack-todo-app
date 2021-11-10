import React from 'react';
import { connect } from 'react-redux';
import { getTasksAction } from '../../actions';
import styles from './FilterForm.module.sass';

function FilterForm (props) {
  const { getTask, filter, pagination } = props;

  const filterHandler = e => {
    const {
      target: { value },
    } = e;
    getTask({ priority: value }, pagination);
  };

  const paginationHandler = e => {
    const {
      target: { value },
    } = e;
    const newPage = { ...pagination };

    value === 'next' ? newPage.page++ : newPage.page--;

    getTask(filter, newPage);
  };

  return (
    <div className={styles.filterFormContainer}>
      <button type='button' value='prev' onClick={paginationHandler}>
        Prev Page
      </button>
      <button
        type='button'
        value='high'
        onClick={filterHandler}
        style={{ backgroundColor: '#EB4886' }}
      >
        High
      </button>
      <button
        type='button'
        value='normal'
        onClick={filterHandler}
        style={{ backgroundColor: '#79CBBD' }}
      >
        Normal
      </button>
      <button
        type='button'
        value='low'
        onClick={filterHandler}
        style={{ backgroundColor: '#46C5F3' }}
      >
        Low
      </button>
      <button type='button' value='all' onClick={filterHandler}>
        All
      </button>
      <button type='button' value='next' onClick={paginationHandler}>
        Next Page
      </button>
    </div>
  );
}

const mapStateToProps = state => state.tasks;

const mapDispatchToProps = dispatch => ({
  getTask: (filter, pagination) => {
    dispatch(getTasksAction(filter, pagination));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
