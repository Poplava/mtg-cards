import user from './user';

export default function() {
  this.use('/_/users', user);
};
