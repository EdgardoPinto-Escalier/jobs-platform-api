const Job = require('../models/jobs');

// Get all the jobs from /api/v1/jobs
exports.getJobs = async (req, res, next) => {
  const jobs = await Job.find();
  res.status(200).json({
    success: true,
    results: jobs.length,
    data: jobs
  });
}

// Create a new job on the route: /api/v1/job/new
exports.newJob = async (req, res, next) => {
  const job = await Job.create(req.body);
  res.status(200).json({
    success: true,
    message: 'The new job has been created successfully',
    data: job
  });
}