import user from './user';
import card from './card';
import game from './game';
import deck from './deck';

export default function() {
  this.use('/_/users', user);
  this.use('/_/cards', card);
  this.use('/_/games', game);
  this.use('/_/decks', deck);

  this.use(/\/_.*/i, (req, res) => res.status(404).json({}));
};
