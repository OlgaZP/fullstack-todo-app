import React from 'react';
import { connect } from 'react-redux';
import { getTasksAction } from '../../actions';
import styles from './FilterForm.module.sass';

function FilterForm (props) {
  const { getTask } = props;

  const initialFilter = {
    priority: '',
  };

  const filterHandler = () => {
    console.log('FilterForm into filterHandler :>> ');
    alert('filterHandler');
    // getTask(initialFilter && );
  };

  const paginationHandler = () => {
    console.log('FilterForm into paginationHandler :>> ');
    alert('paginationHandler');
  };

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

const mapDispatchToProps = dispatch => ({
  getTask: filter => {
    dispatch(getTasksAction(filter));
  },
});

export default connect(null, mapDispatchToProps)(FilterForm);
