import express from 'express';
import cors from 'cors';

import PrimeNumberRouter from './Server/Routers/PrimenumberRouter';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('pingpong');
  res.send('pong');
});

app.use('/prime/', PrimeNumberRouter)

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});