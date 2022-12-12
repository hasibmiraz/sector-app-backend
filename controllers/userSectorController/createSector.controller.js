const UserSector = require('../../models/userSectorSchema');
const { sendError } = require('../../utilities/errorHandler');

exports.createSector = async (req, res) => {
  const { name, mainSector, subSector, isAgreed } = req.body;

  const availableUser = await UserSector.findOne({ name });

  if (availableUser)
    return sendError(res, false, 'This user already exists.', 403);

  const userSector = new UserSector({
    name,
    mainSector,
    subSector,
    isAgreed,
  });

  await userSector.save();
  return res
    .status(200)
    .send({ success: true, message: 'Users sector was saved successfully.' });
};
