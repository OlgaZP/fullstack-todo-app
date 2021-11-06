import React from 'react';
import { connect } from 'react-redux';
import { getTasksAction } from '../../actions';
import styles from './FilterForm.module.sass';

function FilterForm (props) {
  console.log('props for FilterForm :>> ', props);
  const { getTask, filter, pagination } = props;

  const filterHandler = () => {
    console.log('FilterForm into filterHandler :>> ');
    alert('filterHandler');
    getTask(filter, pagination);
  };

  const paginationHandler = () => {
    console.log('FilterForm into paginationHandler :>> ');
    alert('paginationHandler');
    getTask(filter, pagination);
  };

  console.log('filter from FilterFormComponent:>> ', filter);
  console.log('pagination from FilterFormComponent:>> ', pagination);

  return (
    <form className={styles.filterFormContainer}>
      <button onClick={paginationHandler}> Prev Page </button>
      <button onClick={filterHandler} style={{ backgroundColor: '#EB4886' }}>
        High
      </button>
      <button onClick={filterHandler} style={{ backgroundColor: '#79CBBD' }}>
        Normal
      </button>
      <button onClick={filterHandler} style={{ backgroundColor: '#46C5F3' }}>
        Low
      </button>
      <button onClick={paginationHandler}> Next Page </button>
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
