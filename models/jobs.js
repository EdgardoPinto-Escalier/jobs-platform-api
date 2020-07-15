const mongoose = require('mongoose');
const validator = require('validator');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter the Job title'],
    trim: true,
    maxlength: [100, 'The Job title cannot exceed 100 characters long']
  },
  slug: String,
  description: {
    type: String,
    require: [true, 'Please enter the Job description'],
    maxlength: [1000, 'The Job description cannot exceed 1000 characters long']
  },
  email: {
    type: String,
    validate: [validator.isEmail, 'Please use a valid Email address']
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  company: {
    type: String,
    required: [true, 'Please add a company name']
  },
  industry: {
    type: [String],
    required: true,
    enum: {
      values: [
        'Agriculture, Food and Natural Resources',
        'Arts, Audio/Video Technology and Communications',
        'Education and Training',
        'Government and Public Administration',
        'Hospitality and Tourism',
        'Information and Technology',
        'Manufacturing',
        'Science, Technology, Engineering and Mathematics',
        'Architecture and Construction',
        'Business Management and Administration',
        'Finance',
        'Health Science',
        'Human Services',
        'Law, Public Safety, Corrections and Security',
        'Marketing, Sales and Service',
        'Transportation, Distribution and Logistics',
        'Others'
      ],
      message: ' Please select the correct category for the industry'
    }
  },
  jobType: {
    type: String,
    required: true,
    enum: {
      values: [
        'Permanent',
        'Temporary',
        'Internship'
      ],
      message: 'Please select the correct option for the job type'
    }
  },
  minEducation: {
    type: String,
    required: true,
    enum: {
      values: [
        'Bachelors Degree',
        'Masters Degree',
        'Phd'
      ],
      message: 'Please select the correct option for the education'
    }
  },
  positions: {
    type: Number,
    default: 1
  },
  experience: {
    type: String,
    required: true,
    enum: {
      values: [
        'No Experience',
        '1 - 2 Years',
        '2 - 5 Years',
        '5 Years +'
      ],
      message: 'Please sellect the correct option for your experience'
    }
  },
  salary: {
    type: Number,
    required: [true, 'Please enter your salary expectations']
  },
  postingDate: {
    type: Date,
    default: Date.now
  },
  lastDate: {
    type: Date,
    default: new Date().setDate(new Date().getDate() + 7)
  },
  applicantsApplied: {
    type: [Object],
    select: false
  }
});

module.exports = mongoose.model('Job', jobSchema);