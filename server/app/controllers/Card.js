import { Types } from 'mongoose';

import Card from '../models/Card';
import Game from '../models/Game';

export function list(req, res, next) {
  const { name, limit, offset } = (req.query || {});

  var query = Card
    .buildQuery(req.query)
    .limit(limit || 10)
    .skip(offset || 0);

  query
    .exec()
    .then(cards => {
      const ids = cards.map(card => card._id);

      return Promise.all([
        cards,
        query.count(),
        Game
          .find({ card: { $in: ids }})
          .exec()
      ]);
    })
    .then(([cards, total, games]) => {
      res.json({
        total,
        cards: cards.map(card => {
          const game = games.find(game => {
            return game.card === card._id;
          });

          card = card.toJSON();
          card.game = game;

          return card;
        })
      });
    })
    .then(null, err => next(err));
}
