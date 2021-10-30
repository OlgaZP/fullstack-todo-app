import { Formik, Form } from 'formik';
import React from 'react';
import styles from './FilterForm.module.sass';

function FilterForm () {
  const initialFilter = {
    priority: 'high',
    date: new Date().getDate(),
  };

  const submitHandler = (values, formikBag) => {
    console.log('into submit handler :>> ');
    console.log('values :>> ', values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialFilter} onSubmit={submitHandler}>
      {formikProps => {
        return (
          <Form className={styles.filterFormContainer}>
            <button type='submit'>High</button>
            <button type='submit'>Normal</button>
            <button type='submit'>Low</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FilterForm;
