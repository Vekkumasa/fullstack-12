import { isPrime } from '../Server/Primenumber/Calculator';

describe('Dummy tests', () => {
  test('Dummy test for number 0', () => {
    expect(isPrime(0)).toBe(false);
  })

  test('Dummy test for number 1', () => {
    expect(isPrime(1)).toBe(false);
  })

  test('Dummy test for number 2', () => {
    expect(isPrime(2)).toBe(true);
  })
})

describe('Prime number tests', () => {
  const primeNumbers = [
    2, 3,	5,	7,	11,	13,	17,	19,	23,
    29,	31,	37,	41,	43,	47,	53,	59,	61,	67,
    71,	73,	79,	83,	89,	97,	101,	103,	107,	109,
    113,	127,	131,	137,	139,	149,	151,	157,	163,	167
	]

  primeNumbers.forEach(test => {
    it(`${test} is a prime number`, () => {
      expect(isPrime(test)).toBe(true);
    })
  })
})

describe('Prime number tests', () => {
  const primeNumbers = [
    4,8,9,10,14,15,16,64,65,66,84,85,86,87,88,90
	]

  primeNumbers.forEach(test => {
    it(`${test} is not a prime number`, () => {
      expect(isPrime(test)).toBe(false);
    })
  })
})