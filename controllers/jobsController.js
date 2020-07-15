const Job = require('../models/jobs');

// Get all the jobs from /api/v1/jobs
exports.getJobs = (req, res, next) => {
  res.status(200).json({
    success: true,
    requestMethod: req.requestMethod,
    message: 'This route will display all jobs in the future'
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