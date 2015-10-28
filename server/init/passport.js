import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

import { AUTH_GOOGLE } from '../config';

import User from '../models/User';

export default function() {
  passport.use(
    new GoogleStrategy({
        clientID: AUTH_GOOGLE.clientID,
        clientSecret: AUTH_GOOGLE.clientSecret,
        callbackURL: AUTH_GOOGLE.redirect,
        passReqToCallback: true
      },
      (request, accessToken, refreshToken, profile, done) => {
        User.authGoogle(profile, done);
      }
    )
  );

  passport.serializeUser((user, done) => User.serialize(user, done));
  passport.deserializeUser((id, done) => User.deserialize(id, done));

  this.use(passport.initialize());
  this.use(passport.session());


  this.get('/auth/google', passport.authenticate(
    'google',
    {
      scope: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.profile.emails.read'
      ]
    }
  ));

  this.get('/auth/google/callback', passport.authenticate(
    'google',
    {
      successRedirect: '/',
      failureRedirect: '/'
    }
  ));
};
