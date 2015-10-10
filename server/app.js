import express from 'express';
import * as UserController from './app/controllers/User';

import { SERVER_PORT } from './config/config';
import init from './config/init';
import router from './app/routes';

const app = express();

init.call(app);
router.call(app);

app.get('/', (req, res) => {
  res.json(req.user);
});

app.listen(SERVER_PORT);
