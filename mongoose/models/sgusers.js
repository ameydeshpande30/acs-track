const mongoose = require('mongoose');

// Define Schemes
const sgusersSchema = new mongoose.Schema({
  loginId: { type: String, required: true }
},
{
  timestamps: true
});

sgusersSchema.statics.findAll = function () {
  // return promise
  return this.find({});
};

// Create Model & Export
module.exports = mongoose.model('Sgusers', sgusersSchema);
