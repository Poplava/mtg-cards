import user from './user';

export default function() {
  this.use('/users', user);
};
