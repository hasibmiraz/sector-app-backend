const mongoose = require('mongoose');

const sectorSchema = mongoose.Schema({
  sectors: {
    type: Array,
  },
});

module.exports = mongoose.model('Sector', sectorSchema);
