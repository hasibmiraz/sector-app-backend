const mongoose = require('mongoose');

const userSectorSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  mainSector: {
    type: String,
    trim: true,
    required: true,
  },
  subSector: {
    type: String,
    trim: true,
    required: true,
  },
  branch: {
    type: String,
    trim: true,
  },
  isAgreed: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('UserSector', userSectorSchema);
