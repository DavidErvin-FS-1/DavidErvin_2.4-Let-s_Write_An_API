// src/router/index.js

const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json({
    message: 'API is up',
    metadata: {
      host: req.hostname,
      path: req.path,
      method: req.method,
    },
  });
});

module.exports = router;
