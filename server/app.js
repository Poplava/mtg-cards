import fs from 'fs';
import express from 'express';
import path from 'path';

import * as UserController from './app/controllers/User';

import { SERVER_PORT } from './config/config';
import init from './config/init';
import router from './app/routes';

const app = express();

init.call(app);
router.call(app);

app.use((req, res) => {
  fs.readFile(path.normalize(path.join(__dirname, '../client/index.html')), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json(err.message);
    }

    return res.send(data.replace('#{INITIAL_STATE}', JSON.stringify({ user: req.user || null })));
  });
});

app.listen(SERVER_PORT);
