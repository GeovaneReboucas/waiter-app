import path from 'node:path';

import express from 'express';
import { router } from './router';

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀Server is running on http://localhost:${port}`);
    });

  })
  .catch(() => console.log('erro ao conectar no mongodb'));

