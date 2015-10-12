import user from './user';

export default function() {
  this.use('/_/users', user);

  this.use(/\/_.*/i, (req, res) => res.status(404).json({}));
};
