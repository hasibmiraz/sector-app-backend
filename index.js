const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const port = process.env.PORT || process.env.PRODUCTION_PORT;
require('./db');

app.use(express.json());
app.use(cors());
app.use(helmet());

// Connect to mongodb
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
