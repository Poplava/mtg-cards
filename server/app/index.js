import express from 'express';

import init from '../init';

import { SERVER_PORT } from '../config';

const app = express();

init(app);

app.listen(SERVER_PORT, () => {
  console.log('=> App started.');
});
