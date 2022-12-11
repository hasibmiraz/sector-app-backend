const express = require('express');
const {
  createSector,
} = require('../controllers/userSectorController/createSector.controller');
const { userSectorValidator, validate } = require('../middlewares/validators');
const router = express.Router();

router
  /**
   * @api {post} /create create record of users sectors
   * @apiDescription Submit user details with sectors
   * @apiPermission authorized user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {Object[]} show success message
   *
   * @apiError (Unauthorized 401)  Unauthorized  If wrong user inputs his name
   */
  .post('/create', userSectorValidator, validate, createSector);

module.exports = router;
