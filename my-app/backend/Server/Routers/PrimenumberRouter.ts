import express, {Request, Response} from 'express';
import { isPrime } from '../Primenumber/Calculator';
import { PrimeSum, CustomRequest, NumberArray} from '../../types';

const router = express.Router();

router.post('/singleInteger', (req: Request, res: Response) => {
  res.send(isPrime(req.body.number));
});

router.post('/multipleIntegers', (req: CustomRequest<NumberArray>, res: Response) => {
  const { numberArray } = req.body
  const sum = numberArray.reduce((prev, curr) => prev + curr, 0)
  const primeSum: PrimeSum = {
    sum,
    isPrime: isPrime(sum)
  }
  res.send(primeSum)
});

export default router