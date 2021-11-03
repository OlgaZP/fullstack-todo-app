const yup = require('yup');

module.exports.PAGINATION_VALIDATION_SCHEMA = yup.object().shape({
  limit: yup
    .number()
    .min(1)
    .max(10)
    .required(),
  offset: yup
    .number()
    .min(1)
    .required(),
});

module.exports.NEW_TODO_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required(),
  descripition: yup.string(),
  date: yup.date().required(),
  // .default(new Date().toISOString())
  // .min(
  //   new Date(Date.now() - 86400000).toDateString(),
  //   'You cannot add todo in the past!'
  // ),
  priority: yup
    .string()
    .required()
    .matches(/(low|normal|high)/),
  isDone: yup.boolean(),
});
