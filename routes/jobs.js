const express = require('express');
const router = express.Router();

// Import the jobs controller methods
const { getJobs } = require('../controllers/jobsController');

router.route('/jobs').get(getJobs);




module.exports = router;