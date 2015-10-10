import express from 'express';
import passport from 'passport';

import { SERVER_PORT } from './config/config';
import init from './config/init';

const app = express();

init.call(app);

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
  ));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure'
  }));

app.get('/', (req, res) => {
  res.json(req.user);
});

app.listen(SERVER_PORT);
