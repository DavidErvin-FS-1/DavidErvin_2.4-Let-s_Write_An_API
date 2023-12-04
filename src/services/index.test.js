// src/services/index.test.js

const { getAllCards, getCardsBySet } = require('./index');

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

    describe('Testing getCardsBySet', () => {
      test('Should return an array of all cards', async () => {
        try {
          const result = await getCardsBySet('TFC');
          expect(Array.isArray(result)).toBe(true);
        } catch (error) {
          throw error;
        }
      });
    });

    describe('Testing getCardById', () => {
      test('Should return an array of all cards', async () => {
        try {
          const result = await getCardsBySet('TFC', '001');
          expect(Array.isArray(result)).toBe(true);
        } catch (error) {
          throw error;
        }
      });
    });
  });
});
