import express from 'express';
import { ap } from 'most';

const app = express();

app.listen(3000, () => {
  console.log('Alive');
})

