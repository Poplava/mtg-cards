import express from 'express';
import bodyParser from 'body-parser';

import * as config from './config';
import router from './router';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

router(app);

app.listen(config.PORT, error => {
  if (error) {
    console.log(error);
  } else {
    console.log(`App starts at port ${config.PORT}`)
  }
});
