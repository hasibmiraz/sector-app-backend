const userSectorSchema = require('../../models/userSectorSchema');

exports.createSector = async (req, res) => {
  const { name, mainSector, subSector, branch, isAgreed } = req.body;

  const userSector = new userSectorSchema({
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
