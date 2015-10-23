import { Types } from 'mongoose';

import Card from '../models/Card';
import Game from '../models/Game';

export function post(req, res, next) {
  const { cardId } = req.body;

  Card
    .findById(cardId)
    .exec()
    .then(card => {
      if (!card) {
        return Promise.reject('No card found.');
      }

      return Promise.all([
        card,
        Game
          .findOne({ card: card._id })
          .exec()
      ]);
    })
    .then(([card, game]) => {
      if (!game) {
        return Game.create({ card: card._id });
      }

      game.set('total', game.total + 1);

      return game.save();
    })
    .then(game => {
      res.json(game);
    })
    .then(null, err => next(err));
}
