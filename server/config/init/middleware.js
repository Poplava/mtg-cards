import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import { AUTH_SESSION_SECRET } from '../config';

export default function() {
  this.use(bodyParser.urlencoded({ extended: false }));
  this.use(bodyParser.json());
  this.use(cookieParser());
  this.use(session({
    secret: AUTH_SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  }));
};
