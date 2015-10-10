import express from 'express';
import passport from 'passport';

import { SERVER_PORT } from './config/config';
import init from './config/init';

const app = express();

init.call(app);

app.get('/', (req, res) => {
  res.json(req.user);
});

app.listen(SERVER_PORT);
