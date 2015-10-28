import express from 'express';

import { SERVER_PORT } from './config';
import init from './init';

const app = express();

init.call(app);

app.listen(SERVER_PORT);
