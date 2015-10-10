import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

import { AUTH_GOOGLE, AUTH_SESSION_SECRET } from '../config';

export default function() {
  passport.use(
    new GoogleStrategy({
        clientID: AUTH_GOOGLE.clientID,
        clientSecret: AUTH_GOOGLE.clientSecret,
        callbackURL: 'http://localhost:3000/auth/google/callback',
        passReqToCallback   : true
      },
      (request, accessToken, refreshToken, profile, done) => {
        //User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //  return done(err, user);
        //});
        console.log(profile);
        done(null, profile);
      }
    )
  );

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    //User.findById(id, function (err, user) {
    //  done(err, user);
    //});

    done(null, user);
  });


  this.use(cookieParser());
  this.use(session({
    secret: AUTH_SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  }));
  this.use(passport.initialize());
  this.use(passport.session());
};
