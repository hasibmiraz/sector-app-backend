const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('express-async-errors');
const { handleNotFound, errorHandler } = require('./utilities/errorHandler');
const userSectorRouter = require('./routes/userSector.router');
require('dotenv').config();

const app = express();
const port = process.env.PORT || process.env.PRODUCTION_PORT;
require('./db');

app.use(express.json());
app.use(cors());
app.use(helmet());

// routes
app.use('/api/v1/user-sectors', userSectorRouter);

app.use('*', handleNotFound);

// To show try catch error so that we don't need to use try catch in every async function
app.use(errorHandler);

// Connect to mongodb
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
