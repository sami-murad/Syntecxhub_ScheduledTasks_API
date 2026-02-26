const cron = require("node-cron");
const JobLog = require("../models/JobLog");

const startJobs = () => {

  // Example Job 1 — Runs every minute
  cron.schedule("* * * * *", async () => {
    try {
      console.log("⏰ Running Cleanup Job...");

      await JobLog.create({
        jobName: "Cleanup Job",
        status: "Success",
        message: "Cleanup executed successfully",
      });

    } catch (error) {
      await JobLog.create({
        jobName: "Cleanup Job",
        status: "Failure",
        message: error.message,
      });
    }
  });

};

module.exports = startJobs;