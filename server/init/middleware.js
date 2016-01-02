import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import morgan from 'morgan';

import { AUTH_SESSION_SECRET } from '../config';

export default function(app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(session({
    secret: AUTH_SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  }));
  app.use(morgan('tiny'));
};
