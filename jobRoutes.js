const express = require("express");
const JobLog = require("../models/JobLog");

const router = express.Router();

// Get all job logs
router.get("/logs", async (req, res) => {
  const logs = await JobLog.find().sort({ runAt: -1 });
  res.json(logs);
});

// Manual trigger simulation
router.post("/run", async (req, res) => {
  try {
    await JobLog.create({
      jobName: "Manual Job",
      status: "Success",
      message: "Manually triggered job",
    });

    res.json({ message: "✅ Job triggered manually" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;