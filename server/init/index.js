import middleware from './middleware';
import routes from './routes';

export default function(app) {
  initialize(app, 'middleware', middleware);
  initialize(app, 'routes', routes);
};

function initialize(app, name, fn) {
  console.log(`Initializing: ${name}...`);
  fn(app);
  console.log(`Done.`);
}
