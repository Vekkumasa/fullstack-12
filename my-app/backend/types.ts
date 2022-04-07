import { Request } from 'express';

export type PrimeSum = {
  sum: number,
  isPrime: boolean
}

export interface CustomRequest<T> extends Request {
  body: T
}

export type NumberArray = {
  numberArray: number[]
}