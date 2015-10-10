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
  res.sendFile(path.normalize(path.join(__dirname, '../client/index.html')));
});

app.listen(SERVER_PORT);
