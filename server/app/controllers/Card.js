import { Types } from 'mongoose';

import Card from '../models/Card';
import Game from '../models/Game';

export function list(req, res, next) {
  const { name, limit, offset } = (req.query || {});

  var query = Card.find({});

  if (name) {
    query = query.or(
      [{ name: new RegExp(name, 'i') }]
    );
    query = query.or(
      [{ 'foreignNames.language': 'Russian', 'foreignNames.name': new RegExp(name, 'i') }]
    );
  }

  query = query.limit(limit || 10);
  query = query.skip(offset || 0);

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
