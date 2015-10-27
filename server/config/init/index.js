import db from './db';
import webpack from './webpack';
import serve from './serve';
import middleware from './middleware';
import passport from './passport';

export default function() {
  console.log(this.get('env'));
  initialize(this, 'db', db);

  if (this.get('env') !== 'production') {
    initialize(this, 'webpack', webpack);
  } else {
    initialize(this, 'serve', serve);
  }

  initialize(this, 'middleware', middleware);
  initialize(this, 'passport', passport);
};

function initialize(app, name, fn) {
  console.log(`Initializing: ${name}...`);
  fn.call(app);
  console.log(`Done.`);
}
