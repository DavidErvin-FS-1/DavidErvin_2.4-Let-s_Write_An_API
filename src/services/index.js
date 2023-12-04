// src/services/index.js

const axios = require('axios');

const externalApiUrl = 'https://api.lorcana-api.com';

async function getAllCards() {
  try {
    const response = await axios.get(`${externalApiUrl}/cards/all`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getCardsBySet(set_id) {
  if (!set_id) {
    throw new Error('set_id');
  }
  try {
    const response = await axios.get(
      `${externalApiUrl}/cards/fetch?search=set_id=${set_id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function getCardById(set_id, card_id) {
  if (!set_id) {
    throw new Error('set_id');
  }
  if (!card_id) {
    throw new Error('card_id');
  }
  try {
    const response = await axios.get(
      `${externalApiUrl}/cards/fetch?search=set_id=${set_id};card_num=${card_id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllCards,
  getCardsBySet,
  getCardById,
};
