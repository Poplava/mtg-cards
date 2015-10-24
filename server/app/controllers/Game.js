import { Types } from 'mongoose';

import Card from '../models/Card';
import Game from '../models/Game';

export function put(req, res, next) {
  const { card, total } = req.body;

  Card
    .findById(card)
    .exec()
    .then(_card => {
      if (!_card) {
        return Promise.reject('No card found.');
      }

      return Game
        .findOne({ card: card })
        .exec();
    })
    .then(_game => {
      if (!_game) {
        return Game.create({ card: card });
      }

      _game.set('total', total);

      return _game.save();
    })
    .then(_game => {
      res.json(_game);
    })
    .then(null, err => next(err));
}
