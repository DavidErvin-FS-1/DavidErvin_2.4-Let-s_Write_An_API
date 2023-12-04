// src/services/index.test.js

const { getAllCards } = require('.');

describe('Testing services', () => {
  describe('Testing getAllCards', () => {
    test('Should return an array of all cards', async () => {
      try {
        const result = await getAllCards();
        expect(Array.isArray(result)).toBe(true);
      } catch (error) {
        throw error;
      }
    });
  });
});
