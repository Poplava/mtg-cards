import db from './db';
import webpack from './webpack';
import middleware from './middleware';
import passport from './passport';

export default function() {
  initialize(this, 'db', db);
  initialize(this, 'webpack', webpack);
  initialize(this, 'middleware', middleware);
  initialize(this, 'passport', passport);
};

function initialize(app, name, fn) {
  console.log(`Initializing: ${name}...`);
  fn.call(app);
  console.log(`Done.`);
}
