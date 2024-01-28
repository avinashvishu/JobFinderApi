const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    require: true,
  },
  logoUrl: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },
  salary: {
    type: String,
    require: true,
  },
  jobType: {
    type: String,
    require: true,
  },
  workModel: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  about: {
    type: String,
    require: true,
  },
  skills: {
    type: Array,
    require: true,
  },
  info: {
    type: String,
    require: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
});

module.exports = mongoose.model("job", jobSchema);
