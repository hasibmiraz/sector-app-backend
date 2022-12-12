const sectorSchema = require('../../models/sectorSchema');

exports.getSectors = async (req, res) => {
  const sectors = await sectorSchema.find({});
  return res.status(200).json({ sectors: sectors[0].sectors });
};
