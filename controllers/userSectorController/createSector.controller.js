const UserSector = require('../../models/userSectorSchema');

exports.createSector = async (req, res) => {
  const { userId, name, mainSector, subSector, branch, isAgreed } = req.body;

  const userSector = new UserSector({
    userId,
    name,
    mainSector,
    subSector,
    branch,
    isAgreed,
  });

  await userSector.save();
  return res
    .status(200)
    .send({ success: true, message: 'Users sector was saved successfully.' });
};

exports.updateSector = async (req, res) => {
  const { name, mainSector, subSector, branch } = req.body;

  await UserSector.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        name,
        mainSector,
        subSector,
        branch,
      },
    }
  );

  return res
    .status(200)
    .send({ success: true, message: 'Users sector was updated successfully.' });
};
