import db from './db';
import serve from './serve';
import webpack from './webpack';
import middleware from './middleware';
import passport from './passport';
import routes from './routes';

export default function() {
  initialize(this, 'serve', serve);
  initialize(this, 'webpack', webpack);
  initialize(this, 'db', db);
  initialize(this, 'middleware', middleware);
  initialize(this, 'passport', passport);
  initialize(this, 'routes', routes);
};

function initialize(app, name, fn) {
  console.log(`Initializing: ${name}...`);
  fn.call(app);
  console.log(`Done.`);
}
