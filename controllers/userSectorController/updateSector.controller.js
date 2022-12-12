const UserSector = require('../../models/userSectorSchema');
const { sendError } = require('../../utilities/errorHandler');

exports.updateSector = async (req, res) => {
  const { name, mainSector, subSector } = req.body;

  const existingUser = await UserSector.findOne({
    _id: req.params.id,
  });

  if (existingUser.name !== name)
    return sendError(res, false, 'Unauthorized access.');

  await UserSector.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        name,
        mainSector,
        subSector,
      },
    }
  );

  return res
    .status(200)
    .send({ success: true, message: 'Users sector was updated successfully.' });
};
