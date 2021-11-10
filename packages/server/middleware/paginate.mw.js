const yup = require('yup');
const {
  PAGINATION_VALIDATION_SCHEMA,
} = require('./../utils/validationSchemas');

module.exports.paginateToDos = async (req, res, next) => {
  const {
    query: { page, results, priority },
  } = req;
  // console.log(`page from middleware`, page);
  // console.log(`result from middleware`, results);
  // console.log(`priority from middleware`, priority);

  const defaultPagination = { limit: 5, offset: 0 };

  const pagination = {
    limit: results ?? 5,
    offset: (page - 1) * results || 0,
  };

  try {
    req.priority = priority;
    // console.log(`pagination`, pagination);
    if (await PAGINATION_VALIDATION_SCHEMA.isValid(pagination)) {
      req.pagination = pagination;
    } else {
      req.pagination = defaultPagination;
    }
  } catch (err) {
    next(err);
  }
  next();
};
