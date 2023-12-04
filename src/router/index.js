// src/router/index.js

const express = require('express');

const router = express.Router();
const service = require('../services');

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

router.get('/cards', async (req, res) => {
  try {
    const cards = await service.getAllCards();
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/cards/:set_id', async (req, res) => {
  try {
    const { set_id } = req.params;
    const card = await service.getCardsBySet(set_id);

    res.json(card);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/cards/:set_id/:card_id', async (req, res) => {
  try {
    const { set_id, card_id } = req.params;
    const card = await service.getCardById(set_id, card_id);

    res.json(card);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/cards/:set_id/:card_id/name', async (req, res) => {
  try {
    const { set_id, card_id } = req.params;
    const card = await service.getCardById(set_id, card_id);
    const { Name } = card[0];

    res.json(Name);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
