const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// Setting config.env file variables
dotenv.config({path : './config/config.env'})

// Connect to the Database
connectDatabase();

// Create a Middleware
const middleware = (req, res, next) => {
  console.log('Hello from Middleware');

  // Setting the user variable globally
  req.requestMethod = req.url;
  next();
}

app.use(middleware);

// Import routes here
const jobs = require('./routes/jobs');


app.use("/api/v1", jobs);



const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});