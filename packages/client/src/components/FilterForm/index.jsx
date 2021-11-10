import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { getTasksAction } from '../../actions';
import styles from './FilterForm.module.sass';

function FilterForm (props) {
  console.log('props for FilterForm :>> ', props);
  const { getTask, filter, pagination } = props;

  const filterHandler = e => {
    console.log('FilterForm into filterHandler :>> ', e.target.value);
    alert(`filterHandler`);
    getTask({ priority: e.target.value }, pagination);
  };

  const paginationHandler = () => {
    console.log('FilterForm into paginationHandler :>> ');

    console.log('filter from PaginationHandler:>> ', filter);
    console.log('pagination from PaginationHandler:>> ', pagination);
    const { page, results } = pagination;
    const newPage = { page: page + 1, results };
    console.log('newPage :>> ', newPage);
    alert(`paginationHandler ${newPage.page}`);
    getTask(filter, newPage);
  };

  console.log('filter from FilterFormComponent:>> ', filter);
  console.log('pagination from FilterFormComponent:>> ', pagination);

  return (
    <form className={styles.filterFormContainer}>
      <button type='button' onClick={paginationHandler}>
        {' '}
        Prev Page{' '}
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
      <button type='button' onClick={paginationHandler}>
        {' '}
        Next Page{' '}
      </button>
    </form>
  );
}

const mapStateToProps = state => state.tasks;

const mapDispatchToProps = dispatch => ({
  getTask: (filter, pagination) => {
    dispatch(getTasksAction(filter, pagination));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
