// src/index.js

const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const router = require('./router');

if (!port) {
  throw new Error(
    'PORT environment variable is not set. Please set it and try again.'
  );
}

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Service is up',
    metadata: {
      host: req.hostname,
      path: req.path,
      method: req.method,
    },
  });
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
