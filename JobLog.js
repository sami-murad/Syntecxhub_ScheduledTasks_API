const mongoose = require("mongoose");

const jobLogSchema = new mongoose.Schema({
  jobName: String,
  status: String,
  message: String,
  runAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("JobLog", jobLogSchema);