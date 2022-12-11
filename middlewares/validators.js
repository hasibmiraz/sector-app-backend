const { check, validationResult } = require('express-validator');

exports.userSectorValidator = [
  check('name').trim().not().isEmpty().withMessage('Name is required.'),
  check('mainSector').trim().not().isEmpty().withMessage('Select a sector.'),
  check('subSector').trim().not().isEmpty().withMessage('Select a sub sector.'),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.json({ success: false, error: error[0].msg });
  }
  next();
};
